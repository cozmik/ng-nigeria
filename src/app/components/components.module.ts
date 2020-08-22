import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {FooterComponent} from './footer/footer.component';
import {CountDownTimerComponent} from './count-down-timer/count-down-timer.component';
import {EventCardComponent} from './event-card/event-card.component';
import {ProfileCardComponent} from './profile-card/profile-card.component';
import {JobCardComponent} from './job-card/job-card.component';
import {ModalComponent} from './modal/modal.component';
import {SharedModule} from '../shared/shared.module';
import {ProfileCard2Component} from './profile-card2/profile-card2.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';
import {VideoPlayerComponent} from './video-player/video-player.component';
import {TabModule} from 'angular-tabs-component';
import {YouTubePlayerModule} from '@angular/youtube-player';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    CountDownTimerComponent,
    EventCardComponent,
    ProfileCardComponent,
    JobCardComponent,
    ModalComponent,
    ProfileCard2Component,
    VideoPlayerComponent,
  ],
  exports: [
    FooterComponent,
    CountDownTimerComponent,
    EventCardComponent,
    ProfileCardComponent,
    JobCardComponent,
    ModalComponent,
    SharedModule,
    TabModule,
    NavBarComponent,
    VideoPlayerComponent,
    ProfileCard2Component
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TabModule,
    RouterModule,
    YouTubePlayerModule
  ]
})
export class ComponentsModule {
}
