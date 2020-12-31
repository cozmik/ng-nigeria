import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {faFacebookF, faGithub, faLinkedinIn, faSlackHash, faStackOverflow, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {AppService} from '../../app.service';

@Component({
  selector: 'ng-nig-profile-card2',
  templateUrl: './profile-card2.component.html',
  styleUrls: ['./profile-card2.component.scss']
})
export class ProfileCard2Component implements OnInit {
  @Input() profilePix: string;
  @Input() userName: string;
  @Input() job: string;
  @Input() socials: any[];

  constructor(public appService: AppService) {
  }

  ngOnInit(): void {
  }

  sanitizeHandle(h: string): string {
    return h.charAt(0) === '@' ? h.slice(1) : h;
  }
}
