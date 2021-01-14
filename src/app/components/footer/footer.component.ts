import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'ng-nig-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: number;
  socialLinks: { youtubeLink: string; twitterLink: string; whatsappLink: string; slackLink: string; telegramLink: string };
  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    const date = new Date();
    this.year = date.getFullYear();
    this.getUtilityLinks();
  }

  getUtilityLinks(): void {
    this.appService.getVideo().subscribe(res => {
      AppService.utilityLinks.next(res);
      this.socialLinks = res;
    });
  }

  joinSocialMedia(sm: string): void {
    if (sm === 'whatsApp') {
      window.open(this.socialLinks.whatsappLink, '_blank');
    } else if (sm === 'slack') {
      window.open(this.socialLinks.slackLink, '_blank');
    }
  }
}
