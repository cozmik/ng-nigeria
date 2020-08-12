import { JobsComponent } from './components/jobs/jobs.component';
import { PhotosComponent } from './components/photos/photos.component';
import { MembersComponent } from './components/members/members.component';
import { EventsComponent } from './components/events/events.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full',
    data: { animation: 'fade-in' }
  },
  // {
  //   path: 'events',
  //   component: EventsComponent
  // },
  // {
  //   path: 'members',
  //   component: MembersComponent
  // },
  // {
  //   path: 'photos',
  //   component: PhotosComponent,
  // },
  // {
  //   path: 'jobs',
  //   component: JobsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
