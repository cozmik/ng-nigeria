import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { EventCardComponent } from './event-card/event-card.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { JobCardComponent } from './job-card/job-card.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
    declarations: [
      NavBarComponent,
      FooterComponent,
      CountDownTimerComponent,
      EventCardComponent,
      ProfileCardComponent,
      JobCardComponent,
      ModalComponent
    ],
  exports: [
    NavBarComponent,
    FooterComponent,
    CountDownTimerComponent,
    EventCardComponent,
    ProfileCardComponent,
    JobCardComponent,
    ModalComponent
  ],
    imports: [
        CommonModule
    ]
})
export class ComponentsModule { }
