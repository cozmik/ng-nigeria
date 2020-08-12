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
import { ProfileCard2Component } from './profile-card2/profile-card2.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    CountDownTimerComponent,
    EventCardComponent,
    ProfileCardComponent,
    JobCardComponent,
    ModalComponent,
    ProfileCard2Component
  ],
  exports: [
    FooterComponent,
    CountDownTimerComponent,
    EventCardComponent,
    ProfileCardComponent,
    JobCardComponent,
    ModalComponent,
    SharedModule,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class ComponentsModule {
}
