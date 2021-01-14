import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentsModule} from './components/components.module';
import {LandingPageComponent} from './layout/landing-page/landing-page.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EventsComponent} from './layout/events/events.component';
import {PhotosComponent} from './layout/photos/photos.component';
import {MembersComponent} from './layout/members/members.component';
import {JobsComponent} from './layout/jobs/jobs.component';
import {NotFoundComponent} from './layout/not-found/not-found.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {MembershipFormComponent} from './layout/membership-form/membership-form.component';
import {FormsModule} from '@angular/forms';
import {EventComponent} from './layout/event/event.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BecomeASponsorComponent} from './layout/become-a-sponsor/become-a-sponsor.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ToastrModule} from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    EventsComponent,
    PhotosComponent,
    MembersComponent,
    JobsComponent,
    NotFoundComponent,
    MembershipFormComponent,
    EventComponent,
    BecomeASponsorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FontAwesomeModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    YouTubePlayerModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
