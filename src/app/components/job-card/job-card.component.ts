import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {JobModel} from '../../models/job.model';

@Component({
  selector: 'ng-nig-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  // @Output() applyClicked: EventEmitter<string> = new EventEmitter();
  @Input() job: JobModel;

  constructor() {
  }

  ngOnInit(): void {
  }

  // apply(): void {
  //   this.applyClicked.emit(this.job.link);
  // }
}
