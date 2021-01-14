import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {EventModel} from '../../models/events';
import {Router} from '@angular/router';
import {faCalendar} from '@fortawesome/free-solid-svg-icons/faCalendar';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ng-nig-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss', '../../components/tab-style.scss']
})
export class EventsComponent implements OnInit {

  events: EventModel[];
  pastEventCount = 0;
  futureEventCount = 0;
  pastEvents: EventModel[] = [];
  futureEvents: EventModel[] = [];
  pp = 1;
  pu = 1;
  calenderIcon = faCalendar;
  faSpinner = faSpinner;
  loadingData: boolean;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.loadingData = true;
    let pastCount = 0;
    let futureCount = 0;
    this.appService.getEvents().subscribe(res => {
      this.loadingData = false;
      res.forEach((e, i) => {
        if (e.isPast && pastCount < 5){
          this.pastEvents.push(e);
          pastCount++;
        }

        if ((!e.isPast) && futureCount < 5){
          this.futureEvents.push(e);
          futureCount++;
        }
        if (e.isPast){
          this.pastEventCount++;
        }
      });
      this.futureEventCount = res.length - this.pastEventCount;
    });
  }

  register(event: EventModel): void {
    this.appService.selectedService.next(event);
    this.router.navigate(['events/' + event.id]);
  }
}
