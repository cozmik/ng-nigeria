import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {faFacebookF, faLinkedinIn, faSlackHash, faStackOverflow, faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'ng-nig-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit, OnChanges {


  @Input() name: string;
  @Input() position: string;
  @Input() type: string;
  @Input() profilePix: string;
  @Input() socials: any[];
  socialAccounts: {[key: string]: {[keyVal: string]: any}};

  constructor() {
  }

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
