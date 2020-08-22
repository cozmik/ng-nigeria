import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from '../../transition';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faCalendar, faClock} from '@fortawesome/free-regular-svg-icons';
import {faSlackHash, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {AppService} from '../../app.service';
import {DateTime} from 'luxon';
import {Router} from '@angular/router';

@Component({
  selector: 'ng-nig-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [fadeInAnimation]
})
export class LandingPageComponent implements OnInit {

  playerOptions = {
    autoplay: false,
    controls: true,
    sources: [
      {
        src: 'assets/video/interview.mp4',
        type: 'video/mp4'
      }
    ]
  };


  events: any[] = [];

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
  upComing: any[] = [];
  pastEvents: any[] = [];
  videoId: string;

  constructor(private event: AppService, private router: Router) {
    this.getEvents();
  }

  ngOnInit(): void {
    this.videoId = '7W_qrc-TkR8';
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  getEvents(): void{
    let pastCount = 0;
    let futureCount = 0;
    this.event.getEvents().subscribe((res: any[]) => {
      res.forEach((e, i) => {
        if (this.eventIsPast(e.date) && pastCount < 2){
          this.pastEvents.push(e);
          pastCount++;
        }

        if ((!this.eventIsPast(e.date)) && futureCount < 2){
          this.upComing.push(e);
          futureCount++;
        }
      });
    });
  }

  eventIsPast(time: any): boolean{
    const currentTime = DateTime.fromISO(new Date().toISOString().split('.')[0]);
    return currentTime > DateTime.fromISO(time);
  }

  register(): void {
    console.log('clicked');
  }

  gotoEventPage(): void {
    this.router.navigate(['events']);
  }
}
