import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-nig-become-a-sponsor',
  templateUrl: './become-a-sponsor.component.html',
  styleUrls: ['./become-a-sponsor.component.scss']
})
export class BecomeASponsorComponent implements OnInit {

  sponsorData = {
    sponsorName: '',
    contactName: '',
    email: '',
    phoneNumber: '',
    country: '',
    state: '',
    city: '',
    streetAddress: '',
    category: 'platinum',
    paymentMethod: 'card',
  };

  constructor() { }

  ngOnInit(): void {

  }

  submitRequest(): void {
    console.log('any');
  }
}
