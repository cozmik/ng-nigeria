import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faCalendar, faClock} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'ng-nig-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() title: string;
  @Input() past: boolean;
  @Input() eventImage: string;
  @Input() description: string;
  @Input() date: string;
  @Input() time: string;
  @Input() location: string;
  @Input() sampleAttendantsPix: string[];
  @Input() totalAttendees: number;
  @Output() registerClicked: EventEmitter<any> = new EventEmitter();


  locationIcon = faMapMarkerAlt;
  clockIcon = faClock;
  calenderIcon = faCalendar;

  constructor() {
  }

  ngOnInit(): void {
  }

  clickButton() {
    this.registerClicked.emit('register');
  }
}
