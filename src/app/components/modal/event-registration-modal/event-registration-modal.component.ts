import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NgForm} from '@angular/forms';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {EventModel} from '../../../models/events';

@Component({
  selector: 'ng-nig-event-registration-modal',
  templateUrl: './event-registration-modal.component.html',
  styleUrls: ['./event-registration-modal.component.scss']
})
export class EventRegistrationModalComponent implements OnInit {

  title: string;
  regModel: {
    fullName: string,
    email: string,
  };

  isLoading: boolean;
  loader = faSpinner;

  constructor(public dialogRef: MatDialogRef<EventRegistrationModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { event: EventModel }) {
  }

  ngOnInit(): void {
    this.title = this.data.event.title;
    this.regModel = {fullName: '', email: ''};
    this.isLoading = false;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      console.log(this.regModel);
      this.dialogRef.close('success');
    }, 2000);
  }
}
