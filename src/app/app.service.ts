import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {demoData, demoMembers} from '../assets/demo-data';
import {EventModel} from './models/events';
import {Member} from './models/members';

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
}
