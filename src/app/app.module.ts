
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsComponent } from './components/events/events.component';
import { PhotosComponent } from './components/photos/photos.component';
import { MembersComponent } from './components/members/members.component';
import { JobsComponent } from './components/jobs/jobs.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    // EventsComponent,
    // PhotosComponent,
    // MembersComponent,
    // JobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
