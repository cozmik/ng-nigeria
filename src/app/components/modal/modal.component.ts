import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';

@Component({
  selector: 'ng-nig-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  closeIcon = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.close.emit('close');
  }
}
