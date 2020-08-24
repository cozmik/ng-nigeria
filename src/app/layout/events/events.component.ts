import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {EventModel} from '../../models/events';
import {Router} from '@angular/router';

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
  futureComing: EventModel[] = [];

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    let pastCount = 0;
    let futureCount = 0;
    this.appService.getEvents().subscribe(res => {
      res.forEach((e, i) => {
        if (e.isPast && pastCount < 5){
          this.pastEvents.push(e);
          pastCount++;
        }

        if ((!e.isPast) && futureCount < 5){
          this.futureComing.push(e);
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
