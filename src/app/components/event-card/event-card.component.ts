import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faCalendar, faClock} from '@fortawesome/free-regular-svg-icons';
import {EventModel} from '../../models/events';
import {EventRegistrationModalComponent} from '../modal/event-registration-modal/event-registration-modal.component';
import {ResponseModalComponent} from '../modal/response-modal/response-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {DateTime} from 'luxon';
const imageUrlBuilder = require('@sanity/image-url');
const sanityClient = require('@sanity/client');


const sanity = sanityClient({
  projectId: 'r9dd4cjo',
  dataset: 'production',
  useCdn: true
});


@Component({
  selector: 'ng-nig-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-style.scss', './event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() ngEvent: EventModel;
  title: string;
  past: boolean;
  eventImage: string;
  description: string;
  date: Date;
  time: Date;
  location: string;
  sampleAttendantsPix: string[];
  totalAttendees: number;

  locationIcon = faMapMarkerAlt;
  clockIcon = faClock;
  calenderIcon = faCalendar;
  startTime: DateTime;
  endTime: DateTime;
  id: string;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.title = this.ngEvent.title;
    this.past = this.ngEvent.isPast;
    this.eventImage = this.ngEvent.image;
    this.description = this.ngEvent.shortDesc;
    this.date = this.ngEvent.date;
    this.startTime = this.ngEvent.startTime;
    this.endTime = this.ngEvent.endTime;
    this.location = this.ngEvent.shortAddress;
    this.sampleAttendantsPix = this.ngEvent.attendees;
    this.totalAttendees = this.ngEvent.attendees.length;
    this.id = this.ngEvent.id;
  }

  openRegDialog(event: EventModel): void {
    const dialogRef = this.dialog.open(EventRegistrationModalComponent, {
      width: '550px',
      data: {event}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.openResDialog(result);
      }
    });
  }

  urlFor(source): string {
    return imageUrlBuilder(sanity).image(source);
  }
  openResDialog(result): void {
    const dialogRef = this.dialog.open(ResponseModalComponent, {
      width: '550px',
      data: {title: this.title, type: 'eventReg', status: result, message: 'Registration Successful!', link: 'https://angularm'}
    });
    dialogRef.afterClosed().subscribe(res => {
    });
  }
}
