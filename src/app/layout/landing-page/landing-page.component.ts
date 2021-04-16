import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {fadeInAnimation} from '../../transition';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faCalendar, faClock} from '@fortawesome/free-regular-svg-icons';
import {faSlackHash, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {AppService} from '../../app.service';
import {Router} from '@angular/router';
import {EventModel} from '../../models/events';
import {MatDialog} from '@angular/material/dialog';
import {EventRegistrationModalComponent} from '../../components/modal/event-registration-modal/event-registration-modal.component';
import {ResponseModalComponent} from '../../components/modal/response-modal/response-modal.component';
import {Sponsor} from '../../models/sponsor.model';
import {DateTime} from 'luxon';
import {Member} from '../../models/members';

@Component({
  selector: 'ng-nig-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [fadeInAnimation]
})
export class LandingPageComponent implements OnInit {

  events: EventModel[] = [];

  @ViewChild(TemplateRef, {static: false}) modal: TemplateRef<any>;

  locationIcon = faMapMarkerAlt;
  clockIcon = faClock;
  calenderIcon = faCalendar;

  twitterIcon = faTwitter;
  whatsAppIcon = faWhatsapp;
  slackIcon = faSlackHash;

  eventDeadLine;
  upComing: EventModel[] = [];
  pastEvents: EventModel[] = [];
  videoId: string;
  nextEvent: EventModel;
  sponsors: Sponsor[];
  organizers: Member[];
  socials: { youtubeLink: string; twitterLink: string; whatsappLink: string; slackLink: string; telegramLink: string };

  constructor(private appService: AppService,
              private router: Router,
              public dialog: MatDialog
  ) {
    this.getEvents();
    AppService.utilityLinks.subscribe(res => {
      this.socials = res;
    });
  }

  ngOnInit(): void {
    AppService.utilityLinks.subscribe(res => {
      if (res) {
        this.videoId = res.youtubeLink;
      }
    });
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
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

  openResDialog(result): void {
    const dialogRef = this.dialog.open(ResponseModalComponent, {
      width: '550px',
      data: {
        title: this.nextEvent.title, type: 'eventReg',
        status: result.status, message: result.message,
        link: window.location.origin + '/#/events/' + this.nextEvent.id
      }
    });

    dialogRef.afterClosed().subscribe(res => {
    });
  }

  getEvents(): void {
    let pastCount = 0;
    let futureCount = 0;
    this.appService.getEvents().subscribe((res: EventModel[]) => {
      const past = [];
      const future = [];
      res.forEach((e, i) => {
        if (e.isPast) {
          past.push(e);
          pastCount++;
        }
        if ((!e.isPast)) {
          future.push(e);
          futureCount++;
        }
      });

      past.sort((a, b) => {
        return DateTime.fromISO(b.startTime.toString()).toMillis() - DateTime.fromISO(a.startTime.toString()).toMillis();
      });

      future.sort((a, b) => {
        return DateTime.fromISO(a.startTime.toString()).toMillis() - DateTime.fromISO(b.startTime.toString()).toMillis();
      });
      this.pastEvents = past.slice(-2);
      this.upComing = future.filter((e, i) => i < 2);
      if (future.length) {
        this.nextEvent = future[0];
      } else {
        this.nextEvent = this.pastEvents[0];
      }
      this.organizers = this.nextEvent.organizers;
      this.eventDeadLine = this.nextEvent.endTime;
    });
  }

  gotoEventPage(): void {
    this.router.navigate(['events']);
  }
}
