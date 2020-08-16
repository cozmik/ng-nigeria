import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ng-nig-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  @Output() applyClicked: EventEmitter<string> = new EventEmitter();
  @Input() title: string;
  @Input() about: string;
  @Input() type: string;
  @Input() location: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  apply(): void {
    this.applyClicked.emit();
  }
}
