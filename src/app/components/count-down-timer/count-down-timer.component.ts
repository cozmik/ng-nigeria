import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DateTime} from 'luxon';

@Component({
  selector: 'ng-nig-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss']
})
export class CountDownTimerComponent implements OnInit, OnChanges {

  @Input() time: any;
  private eventDate;
  countdown: { days: number; hours: number; minutes: number; seconds: number } = {days: 0, hours: 0, minutes: 0, seconds: 0};

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.eventDate = DateTime.fromISO(this.time);
    this.startCountDown();
    }

  ngOnInit(): void {
  }

  startCountDown(): void {
    setInterval(() => {
      const currentTime = new Date().toISOString().split('.')[0];
      this.countdown = this.eventDate.diff(DateTime.fromISO(currentTime), ['days', 'hours', 'minutes', 'seconds']).values;
    }, 1000);
  }
}
