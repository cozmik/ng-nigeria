import {Component, Inject, OnInit} from '@angular/core';
import {faCopy, faTimesCircle} from '@fortawesome/free-regular-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface EventRegResp {
  title: string;
  status: string;
  message: string;
  type: string;
  link?: string;
}

@Component({
  selector: 'ng-nig-response-modal',
  templateUrl: './response-modal.component.html',
  styleUrls: ['./response-modal.component.scss']
})
export class ResponseModalComponent implements OnInit {
  title: string;
  status: string;
  message: string;
  type: string;
  checkCircleIcon = faCheck;
  timesCircleIcon = faTimesCircle;
  link: string;
  copyIcon = faCopy;
  twitterIcon = faTwitter;
  messageToShare: string;
  linkMessage: string;

  constructor(public dialogRef: MatDialogRef<ResponseModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: EventRegResp,
              private snackBar: MatSnackBar) {
    this.title = data.title;
    this.status = data.status;
    this.type = data.type;
    this.message = data.message;
    this.link = data.link;
  }

  ngOnInit(): void {
    this.messageToShare = 'I will be attending ' + this.title + ' meetup. Register here';
    this.linkMessage = 'I will be attending ' + encodeURIComponent(this.title) + ' meetup. Register here';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  copyText(): void {
    const copyBox = document.createElement('textarea');
    copyBox.style.position = 'fixed';
    copyBox.style.left = '0';
    copyBox.style.top = '0';
    copyBox.style.opacity = '0';
    copyBox.value = this.messageToShare + ' ' + this.link;
    document.body.appendChild(copyBox);
    copyBox.focus();
    copyBox.select();
    document.execCommand('copy');
    document.body.removeChild(copyBox);

    this.snackBar.open('copied', '', {
      duration: 3000,
      panelClass: ['simple-snack-bar']
    });
  }
}
