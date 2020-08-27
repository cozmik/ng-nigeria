import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ng-nig-membership-form',
  templateUrl: './membership-form.component.html',
  styleUrls: ['./membership-form.component.scss']
})
export class MembershipFormComponent implements OnInit {


  fullName: string;
  email: string;
  jobTitle: string;
  twitterUsername: string;

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(form: NgForm): void {
    const payload: any = {};
    payload.full_name = form.value.fullName;
    payload.email = form.value.email;
    payload.job_title = form.value.jobTitle;
    payload.twitter_username = form.value.twitterUsername;

    console.log(payload);
  }

}
