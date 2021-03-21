import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {sponsors} from '../assets/demo-data';
import {EventModel} from './models/events';
import {Member} from './models/members';
import {JobModel} from './models/job.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {faFacebookF, faGithub, faLinkedinIn, faSlackHash, faStackOverflow, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  static utilityLinks = new BehaviorSubject<{
    youtubeLink: string;
    twitterLink: string;
    whatsappLink: string;
    slackLink: string;
    telegramLink: string
  }>(null);

  selectedService = new BehaviorSubject<EventModel>(null);
  headers = new HttpHeaders({
    'Content-type': 'application/json',
    Authorization: `Bearer ${environment.token}`
  });

  uploadHeader = new HttpHeaders({
    'Content-type': 'image/*',
    Authorization: `Bearer ${environment.token}`
  });

  constructor(private http: HttpClient) {
  }

  serviceUrl(type): string {
    if (type === 'images') {
      return `https://r9dd4cjo.api.sanity.io/v1/assets/images/${environment.dataSet}`;
    }
    return `https://r9dd4cjo.api.sanity.io/v1/data/${type}/${environment.dataSet}`;
  }

  getEvents(): Observable<Array<EventModel>> {
    const data = `*[_type =='event'] | order(startTime desc) {
     _id,
  title,
  desc,
  startTime,
  endTime,
  online,
  speakers[]{
  email,
  firstName,
  lastName,
  company, jobRole, 'socials': socialHandles[]{'link':handle, 'name': media->name}, 'profilePix': profilePix.asset->url},
  link,
  address,
  attendees[]{fullName, email, twitterHandle, "picture":picture.asset->url},
  state,
  country,
  organizers[]{firstName, lastName, jobRole, 'socialHandles': socialHandles[]{'link':handle, 'name': media->name}, 'profilePix': profilePix.asset->url},
  sponsors[]{"logo": logo.asset->url, website, category, "activated": activate},
  "image": image.asset->url
}`;
    return this.http.get(this.serviceUrl('query') + '?query=' + data).pipe(
      map((res: any) => res.result.map(d => new EventModel(d)))
    );
  }

  registerForEvent(data: {
    eventId: string,
    twitter?: string,
    fullName?: string,
    email: string,
  }): Observable<any> {
    const searchData = `*[_type == 'members' && email == '${data.email}']{
    _id,
     firstName,
     lastName,
     profilePix,
     }`;
    if (data.email && !data.fullName) {
      return this.http.get(this.serviceUrl('query') + '?query=' + encodeURIComponent(searchData)).pipe(
        switchMap((res: any) => {
          if (res.result[0]) {
            const searchRegistered = `*[_type == 'event' && _id == '${data.eventId}']
          { 'attendees': attendees[]{'memberId': memberId->_id }}`;
            return this.http.get(this.serviceUrl('query') + '?query=' + encodeURIComponent(searchRegistered)).pipe(
              switchMap((r: any) => {
                if (r.result[0].attendees.filter(d => d.memberId === res.result[0]._id).length) {
                  throw new HttpErrorResponse({error: 'Seems you are already registered for this event'});
                } else {
                  const response = res.result[0];
                  const mutations = [{
                    patch: {
                      id: data.eventId,
                      insert: {
                        after: 'attendees[-1]',
                        items: [
                          {
                            _type: 'attendees',
                            email: data.email,
                            fullName: `${response.firstName} ${response.lastName}`,
                            twitterHandle: '',
                            picture: response.profilePix,
                            memberId: {_ref: response._id, _type: 'reference'}
                          }
                        ]
                      }
                    }
                  }];
                  return this.http.post(this.serviceUrl('mutate'), JSON.stringify({mutations}), {headers: this.headers});
                }
              })
            );
          } else {
            throw new HttpErrorResponse({error: 'Provided email does not belong to a registered member.'});
          }
        })).pipe(
        map((res: any) => res.result));
    } else {
      const mutations = [{
        patch: {
          id: data.eventId,
          insert: {
            after: 'attendees[-1]',
            items: [
              {
                _type: 'attendees',
                email: data.email,
                fullName: data.fullName,
                twitterHandle: data.twitter,
              }
            ]
          }
        }
      }];
      return this.http.get(this.serviceUrl('query') + '?query=' + encodeURIComponent(searchData)).pipe(
        switchMap((res: any) => {
          if (res.result[0]) {
            throw new HttpErrorResponse({error: 'Provided email belongs to a registered member, please register as a member'});
          } else {
            return this.http.post(this.serviceUrl('mutate'), JSON.stringify({mutations}), {headers: this.headers}).pipe(
              map((response: any) => response.result));
          }
        }));
    }
  }

  getVideo(): Observable<any> {
    const data = `*[_type =='utility']{
     youtubeLink,
     whatsappLink,
     telegramLink,
     slackLink,
     twitterLink
  }`;
    return this.http.get(this.serviceUrl('query') + '?query=' + data).pipe(
      map((res: any) => res.result[0])
    );
  }

  getMembers(): Observable<Array<Member>> {
    const query = `*[_type == 'members'] | order(_createdAt desc){
  firstName,
  lastName,
  company,
  jobRole,
  'profilePix': profilePix.asset->url,
  type,
  'socialHandles': socialHandles[]{'link': handle, 'name': media->name}
}`;
    return this.http.get(this.serviceUrl('query') + '?query=' + query).pipe(
      map((res: any) => res.result.map(d => d as Member))
    );
  }

  getJobs(): Observable<JobModel[]> {
    const query = `*[_type=='job'] | order(_createdAt desc){_d, about, link, location, title, type}`;
    return this.http.get(this.serviceUrl('query') + '?query=' + query).pipe(
      map((res: any) => res.result.map(data => data as JobModel))
    );
  }

  getEvent(eventId: string): Observable<EventModel> {
    const data = `
    *[_type == 'event' && _id == '${eventId}']{
    _id,
  title,
  desc,
  startTime,
  endTime,
  online,
  speakers[]{
  email,
  firstName,
  lastName,
  company, jobRole, 'socialHandles': socialHandles[]{'link':handle, 'name': media->name}, 'profilePix': profilePix.asset->url},
  link,
  address,
  attendees[]{fullName, email, twitterHandle, "picture":picture.asset->url},
  state,
  country,
  sponsors[]{"logo": logo.asset->url, website, category, "activated": activate},
  "image": image.asset->url
}`;
    return this.http.get(this.serviceUrl('query') + '?query=' + encodeURIComponent(data)).pipe(
      map((res: any) => new EventModel(res.result[0]))
    );
  }

  getCountry(): Observable<any> {
    return this.http.get('https://cozmik-country-list.herokuapp.com/').pipe(
      map(res => res)
    );
  }

  becomeASponsor(data: any, eventId: string): Observable<any> {
    let mutations: any;

    return this.http.post(this.serviceUrl('images'), data.logo[0], {headers: this.uploadHeader}).pipe(
      tap((res: any) => {
        data.logo = {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: res.document._id
          }
        };
        mutations = [{
          patch: {
            id: eventId,
            insert: {
              after: 'sponsors[-1]',
              items: [
                {
                  _type: 'sponsors',
                  ...data,
                }
              ]
            }
          }
        }];
      }),
      mergeMap(res => this.http.post(this.serviceUrl('mutate'), JSON.stringify({mutations}), {headers: this.headers}).pipe(
        map(response => response))
      )
    );
  }

  getEventMemories(): Observable<EventModel[]> {
    const data = `
    *[_type == 'event']{
    _id,
  title,
  startTime,
  endTime,
  address,
  attendees[]{fullName, email, twitterHandle, "picture":picture.asset->url},
  state,
  country,
  sponsors[]{"logo": logo.asset->url, website, category, "activated": activate},
  "eventPictures": eventPicture[].picture.asset->url
}`;
    return this.http.get(this.serviceUrl('query') + '?query=' + encodeURIComponent(data)).pipe(
      map((res: any) => res.result.map(e => new EventModel(e)))
    );
  }

  becomeAMember(memberData: Member): Observable<any> {
    let mutations: any;
    const submittedData = {...memberData};
    const submittedSocials = [];
    memberData.socialHandles.forEach(s => {
      submittedSocials.push({
        handle: s.handle,
        media: {_ref: s.media._id, _type: 'reference'}
      });
    });
    submittedData.socialHandles = submittedSocials;
    const searchRegistered = `*[_type == 'members' && email == '${memberData.email}' || phone == '${memberData.number}']
          {_id}`;
    return this.http.get(this.serviceUrl('query') + '?query=' + encodeURIComponent(searchRegistered)).pipe(
      switchMap((r: any) => {
        if (r.result.length) {
          throw new HttpErrorResponse({error: 'The provided email or number is already exists!!'});
        } else if (submittedData.profilePix) {
          return this.http.post(this.serviceUrl('images'), submittedData.profilePix[0], {headers: this.uploadHeader}).pipe(
            tap((res: any) => {
              submittedData.profilePix = {
                _type: 'image',
                asset: {
                  _type: 'reference',
                  _ref: res.document._id
                }
              };
              mutations = [{
                create: {
                  _type: 'members',
                  ...submittedData
                },
              }];
            }),
            mergeMap(res => this.http.post(this.serviceUrl('mutate'), JSON.stringify({mutations}), {headers: this.headers})));
        } else {
          mutations = [{
            create: {
              _type: 'members',
              ...submittedData
            },
          }];
          return this.http.post(this.serviceUrl('mutate'), JSON.stringify({mutations}), {headers: this.headers});
        }
      })
    ).pipe(
      map(response => response));
  }

  getSocialMedias(): Observable<any> {
    const query = `*[_type == 'socials']{
      _id,
        name
    }`;
    return this.http.get(this.serviceUrl('query') + '?query=' + query).pipe(
      map((res: any) => res.result.map(d => d))
    );
  }


  // Utility service
  getSocialIcon(media: { _id?: string, name: string }): any {
    const socialAccounts = {
      twitter:
        {
          icon: faTwitter,
          color: '#00ACEE',
          link: 'https://www.twitter.com/'
        },
      facebook:
        {
          icon: faFacebookF,
          color: '#4064ac',
          link: 'https://www.facebook.com/'
        },
      slack:
        {
          icon: faSlackHash,
          color: '#de156c',
          link: 'request'
        },
      linkedin:
        {
          icon: faLinkedinIn,
          color: '#0e76a8',
          link: 'https://www.linkedin.com/in/'
        },

      stackoverflow:
        {
          icon: faStackOverflow,
          color: '#f48024',
          link: 'https://www.stackoverflow.com/'
        },
      github:
        {
          icon: faGithub,
          color: '#4078c0',
          link: 'https://www.github.com/'
        },
    };
    return media.name ? socialAccounts[media.name.toLowerCase()] : '';
  }
}
