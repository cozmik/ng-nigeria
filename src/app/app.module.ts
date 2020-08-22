
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsComponent } from './layout/events/events.component';
import { PhotosComponent } from './layout/photos/photos.component';
import { MembersComponent } from './layout/members/members.component';
import { JobsComponent } from './layout/jobs/jobs.component';
import { MembershipComponent } from './layout/membership/membership.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { MembershipFormComponent } from './layout/membership-form/membership-form.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    EventsComponent,
    // PhotosComponent,
    MembersComponent,
    JobsComponent,
    MembershipComponent,
    NotFoundComponent,
    MembershipFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
