import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {JobModel} from '../../models/job.model';

@Component({
  selector: 'ng-nig-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  private jobs: JobModel[];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): void {
    this.appService.getJobs().subscribe(res => {
      this.jobs = res;
    });
  }

}
