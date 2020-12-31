import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {sponsors} from '../assets/demo-data';
import {EventModel} from './models/events';
import {Member} from './models/members';
import {JobModel} from './models/job.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, mergeMap, tap} from 'rxjs/operators';
import {faFacebookF, faGithub, faLinkedinIn, faSlackHash, faStackOverflow, faTwitter} from '@fortawesome/free-brands-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  selectedService = new BehaviorSubject<EventModel>(null);
  headers = new HttpHeaders({
    'Content-type': 'application/json',
    Authorization: `Bearer sk5OnvEtAnxR8QfFwoA66w4Ze8NW2CtGlf3VrOwzpiAtzIoy5CHvCuQh7JUaXNzC2us0jSe3L2eurZHel4VxmNmFvjiWdG0qwav89YI0k2L7kqCxTuG6QAf0s7JKWukiClEtWz2b3pHt1WoVi1BKpQKlSlocrYWx2aEKJQUhFvoFhejRhFnP`
  });

  uploadHeader = new HttpHeaders({
    'Content-type': 'image/*',
    Authorization: `Bearer sk5OnvEtAnxR8QfFwoA66w4Ze8NW2CtGlf3VrOwzpiAtzIoy5CHvCuQh7JUaXNzC2us0jSe3L2eurZHel4VxmNmFvjiWdG0qwav89YI0k2L7kqCxTuG6QAf0s7JKWukiClEtWz2b3pHt1WoVi1BKpQKlSlocrYWx2aEKJQUhFvoFhejRhFnP`
  });

  constructor(private http: HttpClient) {
  }

  serviceUrl(type): string {
    if (type === 'images') {
      return `https://r9dd4cjo.api.sanity.io/v1/assets/images/production`;
    }
    return `https://r9dd4cjo.api.sanity.io/v1/data/${type}/production`;
  }

  getEvents(): Observable<Array<EventModel>> {
    const data = `*[_type =='event']{
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
    twitter: string,
    fullName: string,
    email: string,
  }): Observable<any> {
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
    return this.http.post(this.serviceUrl('mutate'), JSON.stringify({mutations}), {headers: this.headers}).pipe(
      map((res: any) => res.result)
    );
  }

  getMembers(): Observable<Array<Member>> {
    const query = `*[_type == 'members']{
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
    const query = `*[_type=='job']{_d, about, link, location, title, type}`;
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
      mergeMap(res => this.http.post(this.serviceUrl('mutate'), JSON.stringify({mutations}), {headers: this.headers}).pipe(
        map(response => response))
      )
    );
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
  getSocialIcon(media: {_id?: string, name: string}): any {
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
          link: 'https://www.linkedin.com/'
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
