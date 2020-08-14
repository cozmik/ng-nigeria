import {Component, OnInit} from '@angular/core';
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

  upcomingEvents = [
    {
      title: 'Angular for Everyone',
      desc: 'This Meetup is intended for everyone, the product person,' +
        ' the designer, the angular beginner, the intermediate and the' +
        ' experts. We will be having people talk about easier',
      date: 'October 3, 2019',
      time: '11:00AM - 1:00PM',
      location: 'Lagos, Nigeria',
      attendees: {
        sample: ['assets/images/profile-pix2.jpg', 'assets/images/profile-pix1.jpg'],
        total: 50
      },
      image: 'assets/images/angular-event-sample.png'
    },
    {
      title: 'Angular for Everyone',
      desc: 'This Meetup is intended for everyone, the product person,' +
        ' the designer, the angular beginner, the intermediate and the' +
        ' experts. We will be having people talk about easier',
      date: 'October 3, 2019',
      time: '11:00AM - 1:00PM',
      location: 'Lagos, Nigeria',
      attendees: {
        sample: ['assets/images/profile-pix2.jpg', 'assets/images/profile-pix1.jpg'],
        total: 50
      },
      image: 'assets/images/angular-event-sample.png'
    }
  ];

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

  constructor() {
  }

  ngOnInit(): void {
  }


  register() {
    console.log('clicked');
  }
}
