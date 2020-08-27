import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ng-nig-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: number;
  constructor() {
  }

  ngOnInit(): void {
    const date = new Date();
    this.year = date.getFullYear();
  }

  joinSocialMedia(sm: string): void {
    if (sm === 'whatsApp') {
      console.log('go to whatsapp link');
    } else if (sm === 'slack') {
      console.log('go to slack link');
    }
  }
}
