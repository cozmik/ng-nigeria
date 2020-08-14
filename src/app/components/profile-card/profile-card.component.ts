import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {faFacebookF, faSlackHash, faStackOverflow, faTwitter} from '@fortawesome/free-brands-svg-icons';

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
  @Input() facebook: string;
  @Input() twitter: string;
  @Input() slack: string;
  @Input() stackoverflow: string;
  socialAccounts: {[key: string]: {[keyVal: string]: any}};

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.socialAccounts = {
      twitter:
        {
          icon: faTwitter,
          color: '#00ACEE',
          link: changes.twitter?.currentValue
        },
      facebook:
        {
          icon: faFacebookF,
          color: '#4064ac',
          link: changes.facebook?.currentValue
        },
      slack:
        {
          icon: faSlackHash,
          color: '#de156c',
          link: changes.slack?.currentValue
        },

      stackoverflow:
        {
          icon: faStackOverflow,
          color: '#f48024',
          link: changes.stackoverflow?.currentValue
        },
    };
  }

  ngOnInit(): void {
  }

}
