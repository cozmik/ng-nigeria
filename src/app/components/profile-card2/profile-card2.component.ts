import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {faFacebookF, faLinkedinIn, faSlackHash, faStackOverflow, faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'ng-nig-profile-card2',
  templateUrl: './profile-card2.component.html',
  styleUrls: ['./profile-card2.component.scss']
})
export class ProfileCard2Component implements OnInit, OnChanges {
  @Input() profilePix: string;
  @Input() userName: string;
  @Input() job: string;
  @Input() socials: any[];
  socialAccounts: {[key: string]: {[keyVal: string]: any}};


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.socials?.currentValue) {
      const socials = changes.socials?.currentValue;
      this.socialAccounts = {
        twitter:
          {
            icon: faTwitter,
            color: '#00ACEE',
            link: this.getSocials(socials, 'Twitter')
          },
        facebook:
          {
            icon: faFacebookF,
            color: '#4064ac',
            link: this.getSocials(socials, 'Facebook')
          },
        slack:
          {
            icon: faSlackHash,
            color: '#de156c',
            link: this.getSocials(socials, 'Slack')
          },
        linkedIn:
          {
            icon: faLinkedinIn,
            color: '#de156c',
            link: this.getSocials(socials, 'LinkedIn')
          },

        stackoverflow:
          {
            icon: faStackOverflow,
            color: '#f48024',
            link: this.getSocials(socials, 'Stackoverflow')
          },
      };
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  getSocials(socials: any[], type: string): string | undefined {
    const socialLink = socials.filter(s => s.name === type)[0];
    if (socialLink){
      return socialLink.link;
    }
    return undefined;
  }

}
