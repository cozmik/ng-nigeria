import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {demoData, demoMembers, jobs, sponsors} from '../assets/demo-data';
import {EventModel} from './models/events';
import {Member} from './models/members';
import {JobModel} from './models/job.model';
import {Sponsor} from './models/sponsor.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  selectedService = new BehaviorSubject<EventModel>(null);

  constructor() {
  }

  getEvents(): Observable<Array<EventModel>> {
    return of(demoData.map(e => new EventModel(e)));
  }

  getMembers(): Observable<Array<Member>> {
    return of(demoMembers.map(m => m as Member));
  }

  getJobs(): Observable<JobModel[]> {
    return of(jobs.map(j => j as JobModel));
  }

  getEvent(eventId: number): Observable<EventModel> {
    return of(new EventModel(demoData.find(e => e.id === eventId)));
  }

  getSponsors(): Observable<any> {
    return of (sponsors.map(s => s as Sponsor));
  }
}
