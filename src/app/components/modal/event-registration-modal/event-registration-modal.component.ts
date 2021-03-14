import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {EventModel} from '../../../models/events';
import {AppService} from '../../../app.service';

@Component({
  selector: 'ng-nig-event-registration-modal',
  templateUrl: './event-registration-modal.component.html',
  styleUrls: ['./event-registration-modal.component.scss']
})
export class EventRegistrationModalComponent implements OnInit {

  title: string;
  regModel: {
    eventId: string,
    twitter: string,
    fullName: string,
    email: string,
    code: string,
  };

  isLoading: boolean;
  loader = faSpinner;

  constructor(public dialogRef: MatDialogRef<EventRegistrationModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { event: EventModel }, private appService: AppService) {
  }

  ngOnInit(): void {
    this.title = this.data.event.title;
    this.regModel = {eventId: this.data.event.id, ...this.regModel};
    this.isLoading = false;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(): void {
    this.isLoading = true;
    this.appService.registerForEvent(this.regModel).subscribe(res => {
      this.dialogRef.close({status: 'success', message: 'Registration Successful!'});
      this.isLoading = false;
    }, error => {
      this.dialogRef.close({status: 'error', message: error.error });
      console.log(error);
      this.isLoading = false;
    });
  }
}
