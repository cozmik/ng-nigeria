import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from '../transition';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faCalendar, faClock} from '@fortawesome/free-regular-svg-icons';
import {faSlackHash, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'ng-nig-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [fadeInAnimation]
})
export class LandingPageComponent implements OnInit {

  locationIcon = faMapMarkerAlt;
  clockIcon = faClock;
  twitterIcon = faTwitter;
  whatsAppIcon = faWhatsapp;
  slackIcon = faSlackHash;

  calenderIcon = faCalendar;
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

  constructor() { }

  ngOnInit(): void {
  }

}
