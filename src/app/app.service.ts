import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {demoData, demoMembers, jobs} from '../assets/demo-data';
import {EventModel} from './models/events';
import {Member} from './models/members';
import {JobModel} from './models/job.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

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
}
