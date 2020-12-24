import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AppService} from '../../../app.service';

@Component({
  selector: 'ng-nig-social-media-modal',
  templateUrl: './social-media-modal.component.html',
  styleUrls: ['./social-media-modal.component.scss', '../event-registration-modal/event-registration-modal.component.scss']
})
export class SocialMediaModalComponent implements OnInit {
  social: { media: {_id: string; name: string}, handle: string };
  availableMedia: {_id: string; name: string}[];
  socialIcon: any;
  socialIconColor: string;

  constructor(public dialogRef: MatDialogRef<SocialMediaModalComponent>,
              public appService: AppService,
              @Inject(MAT_DIALOG_DATA) public data: { medias: any[]} ) { }

  ngOnInit(): void {
    this.availableMedia = this.data.medias;
    this.social = {media: this.availableMedia[0], handle: ''};
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addHandle(): void {
    this.dialogRef.close({media: this.social});
  }
}
