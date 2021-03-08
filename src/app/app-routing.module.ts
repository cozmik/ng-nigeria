import { JobsComponent } from './layout/jobs/jobs.component';
import { PhotosComponent } from './layout/photos/photos.component';
import { MembersComponent } from './layout/members/members.component';
import { EventsComponent } from './layout/events/events.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import {MembershipFormComponent} from './layout/membership-form/membership-form.component';
import {EventComponent} from './layout/event/event.component';
import {BecomeASponsorComponent} from './layout/become-a-sponsor/become-a-sponsor.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'events/:id',
    component: EventComponent,
  },
  {
    path: 'members',
    component: MembersComponent,
  },
  {
    path: 'photos',
    component: PhotosComponent,
  },
  {
    path: 'join',
    component: MembershipFormComponent,
  },
  {
    path: 'sponsor/:eventId',
    component: BecomeASponsorComponent,
  },
  {
    path: 'jobs',
    component: JobsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
