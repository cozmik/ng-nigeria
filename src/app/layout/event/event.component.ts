import { Component, OnInit } from '@angular/core';
import {EventModel} from '../../models/events';
import {AppService} from '../../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {faCalendar, faClock} from '@fortawesome/free-regular-svg-icons';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {Member} from '../../models/members';
import {EventRegistrationModalComponent} from '../../components/modal/event-registration-modal/event-registration-modal.component';
import {ResponseModalComponent} from '../../components/modal/response-modal/response-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {Sponsor} from '../../models/sponsor.model';

@Component({
  selector: 'ng-nig-event',
  templateUrl: './event.component.html',
  styleUrls: ['../../components/event-card/event-style.scss', './event.component.scss']
})
export class EventComponent implements OnInit {

  event: EventModel;
  calenderIcon = faCalendar;
  clockIcon = faClock;
  locationIcon = faMapMarkerAlt;
  eventDeadLine;

  private eventId: string;
  speakers: Member[];
  sponsors: Sponsor[];

  constructor(private appService: AppService,
              private ar: ActivatedRoute,
              private dialog: MatDialog,
              private router: Router) {
    this.eventId = this.ar.snapshot.params.id;
  }

  ngOnInit(): void {
    this.appService.getEvent(this.eventId).subscribe(res => {
      this.event = res;
      this.eventDeadLine = this.event.endTime;
      this.speakers = this.event.speakers;
    });
  }

  openRegDialog(): void {
    const dialogRef = this.dialog.open(EventRegistrationModalComponent, {
      width: '550px',
      data: {event: this.event}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.openResDialog(result);
      }
    });
  }

  openResDialog(result): void {
    const dialogRef = this.dialog.open(ResponseModalComponent, {
      width: '550px',
      data: {title: this.event.title, type: 'eventReg', status: result, message: 'Registration Successful!', link: 'https://angularm'}
    });
    dialogRef.afterClosed().subscribe(res => {
    });
  }


  sponsorEvent(): void{
    this.router.navigate(['sponsor/' + this.event.id]);
  }
}
