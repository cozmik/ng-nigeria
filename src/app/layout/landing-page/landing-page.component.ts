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

@Component({
  selector: 'ng-nig-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss', '../event/event.scss'],
  animations: [fadeInAnimation]
})
export class LandingPageComponent implements OnInit {

  events: EventModel[] = [];

  @ViewChild(TemplateRef, { static: false }) modal: TemplateRef<any>;

  locationIcon = faMapMarkerAlt;
  clockIcon = faClock;
  calenderIcon = faCalendar;

  twitterIcon = faTwitter;
  whatsAppIcon = faWhatsapp;
  slackIcon = faSlackHash;

  eventDeadLine = '2020-08-31';

  orginizer = {
    name: 'kelechi Oti',
    position: 'organizer',
    profilePix: 'assets/images/funny-profile-pic59.jpg',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
    slack: 'https://slack.com',
    stackoverflow: 'https://stackoverflow.com'
  };
  upComing: EventModel[] = [];
  pastEvents: EventModel[] = [];
  videoId: string;
  nextEvent: EventModel;

  constructor(private event: AppService,
              private router: Router,
              public dialog: MatDialog
              ) {
    this.getEvents();
  }

  ngOnInit(): void {
    this.videoId = '7W_qrc-TkR8';
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
      if (result){
        this.openResDialog(result);
      }
    });
  }

  openResDialog(result): void {
    const dialogRef = this.dialog.open(ResponseModalComponent, {
      width: '550px',
      data: {title: this.nextEvent.title, type: 'eventReg', status: result, message: 'Registration Successful!', link: 'https://angularm' }
    });

    dialogRef.afterClosed().subscribe(res => {
    });
  }

  getEvents(): void{
    let pastCount = 0;
    let futureCount = 0;
    this.event.getEvents().subscribe((res: any[]) => {
      res.forEach((e, i) => {
        e = new EventModel(e);
        if (e.isPast && pastCount < 2){
          this.pastEvents.push(e);
          pastCount++;
        }

        if ((!e.isPast) && futureCount < 2){
          this.upComing.push(e);
          futureCount++;
        }
      });
      this.nextEvent = this.upComing[0];
    });
  }

  register(): void {
    console.log('clicked');
  }

  gotoEventPage(): void {
    this.router.navigate(['events']);
  }
}
