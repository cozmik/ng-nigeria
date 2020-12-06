import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Sponsor} from '../../models/sponsor.model';

@Component({
  selector: 'ng-nig-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit, OnChanges {

  @Input() sponsors: Array<Sponsor>;
  allSponsors = {};

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sponsors) {
      this.sponsors.forEach(sp => {
        if (sp.activated) {
          if (this.allSponsors[sp.category]) {
            this.allSponsors[sp.category].push({logo: sp.logo, link: sp.website});
          } else {
            this.allSponsors[sp.category] = [
              {logo: sp.logo, link: sp.website}
            ];
          }
        }
      });
    }
  }
}
