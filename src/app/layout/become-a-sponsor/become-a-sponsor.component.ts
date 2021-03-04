import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Sponsor} from '../../models/sponsor.model';
import {AppService} from '../../app.service';
import {ResponseModalComponent} from '../../components/modal/response-modal/response-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'ng-nig-become-a-sponsor',
  templateUrl: './become-a-sponsor.component.html',
  styleUrls: ['./become-a-sponsor.component.scss', '../../components/form.styles.scss']
})
export class BecomeASponsorComponent implements OnInit {
  submittingRequest: boolean;
  countries: any[];
  states: any[];
  constructor(private ar: ActivatedRoute,
              private appService: AppService,
              private dialog: MatDialog
  ) {
    this.eventId = this.ar.snapshot.params.eventId;
  }

  emptyData: Sponsor = {
    sponsorName: '',
    contactName: '',
    email: '',
    phoneNumber: '',
    country: '',
    state: '',
    logo: '',
    city: '',
    website: '',
    streetAddress: '',
    category: 'platinum',
    paymentMethod: 'card',
  };

  sponsorData = {...this.emptyData};

  @ViewChild('fileInput') fileInputVariable: any;
  private readonly eventId: string;
  country = '';

  ngOnInit(): void {
    this.appService.getCountry().subscribe(res => {
      this.countries = res.sort((a, b) => a.name.localeCompare(b.name));
      console.log(res);
    });
  }

  submitRequest(): void {
    this.submittingRequest = true;
    this.appService.becomeASponsor(this.sponsorData, this.eventId).subscribe(res => {
      this.submittingRequest = false;
      this.openResDialog('success', 'Your sponsorship is being processed');
      this.sponsorData = {...this.emptyData};
    }, error => {
      this.openResDialog('error', 'Sorry, something went wrong');
    });
  }

  openResDialog(result, message): void {
    const dialogRef = this.dialog.open(ResponseModalComponent, {
      width: '550px',
      data: { title: 'Sponsor', type: 'Sponsorship', status: result, message }
    });
    dialogRef.afterClosed().subscribe(res => {
    });
  }

  getStates(): void {
    this.sponsorData.country = this.country;
    this.states = this.countries.filter(country => country.name === this.country)[0]
      .states.sort((a, b) => a.name.localeCompare(b.name));
  }
}
