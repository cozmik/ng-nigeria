import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {faFacebookF, faLinkedinIn, faSlackHash, faStackOverflow, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {AppService} from '../../app.service';

@Component({
  selector: 'ng-nig-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {


  @Input() name: string;
  @Input() position: string;
  @Input() type: string;
  @Input() profilePix: string;
  @Input() socials: any[];

  constructor(public appService: AppService) {
  }

  ngOnInit(): void {
    console.log(this.socials);
  }

  sanitizeHandle(h: string): string {
    return h.charAt(0) === '@' ? h.slice(1) : h;
  }
}
