import {Component, Input, OnInit} from '@angular/core';
import {Sponsor} from '../../models/sponsor.model';

@Component({
  selector: 'ng-nig-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  @Input() sponsors: Array<Sponsor>;
  allSponsors = {};

  constructor() { }

  ngOnInit(): void {
    this.sponsors.forEach(sp => {
      if (this.allSponsors[sp.category]) {
        this.allSponsors[sp.category].push({logo: sp.logo, link: sp.link});
      } else {
        this.allSponsors[sp.category] = [
          {logo: sp.logo, link: sp.link}
        ];
      }
    });
  }
}
