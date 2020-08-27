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
import {TabModule} from 'angular-tabs-component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { EventRegistrationModalComponent } from './modal/event-registration-modal/event-registration-modal.component';
import {FormsModule} from '@angular/forms';
import { ResponseModalComponent } from './modal/response-modal/response-modal.component';
import { EventPhotosComponent } from './event-photos/event-photos.component';
import {LightboxModule} from '@ngx-gallery/lightbox';
import {GalleryModule} from '@ngx-gallery/core';
import { SponsorsComponent } from './sponsors/sponsors.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


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
    EventRegistrationModalComponent,
    ResponseModalComponent,
    EventPhotosComponent,
    SponsorsComponent,
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
    ProfileCard2Component,
    EventPhotosComponent,
    SponsorsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TabModule,
    RouterModule,
    YouTubePlayerModule,
    FormsModule,
    LightboxModule,
    GalleryModule,
    MatSnackBarModule
  ]
})
export class ComponentsModule {
}
