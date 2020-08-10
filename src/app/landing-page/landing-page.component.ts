import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from '../transition';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faCalendar, faClock} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'ng-nig-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [fadeInAnimation]
})
export class LandingPageComponent implements OnInit {

  locationIcon = faMapMarkerAlt;
  clockIcon = faClock;
  calenderIcon = faCalendar;

  constructor() { }

  ngOnInit(): void {
  }

}
