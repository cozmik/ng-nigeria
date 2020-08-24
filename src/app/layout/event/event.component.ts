import { Component, OnInit } from '@angular/core';
import {EventModel} from '../../models/events';
import {AppService} from '../../app.service';
import {ActivatedRoute} from '@angular/router';
import {faCalendar, faClock} from '@fortawesome/free-regular-svg-icons';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {Member} from '../../models/members';

@Component({
  selector: 'ng-nig-event',
  templateUrl: './event.component.html',
  styleUrls: ['../../components/event-card/event-style.scss', './event.component.scss', './event.scss']
})
export class EventComponent implements OnInit {

  event: EventModel;
  calenderIcon = faCalendar;
  clockIcon = faClock;
  locationIcon = faMapMarkerAlt;
  eventDeadLine = '2020-08-31';

  private eventId: number;
  speakers: Member[];

  constructor(private appService: AppService, private ar: ActivatedRoute) {
    this.eventId = +this.ar.snapshot.params.id;
  }

  ngOnInit(): void {
    this.appService.getEvent(this.eventId).subscribe(res => {
      this.event = res;
    });
    this.getSpeakers();
  }

  getSpeakers(): void{
    this.appService.getMembers().subscribe(res => this.speakers = res);
  }
}
