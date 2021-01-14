import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { JobModel } from '../../models/job.model';
import {faSpinner} from '@fortawesome/free-solid-svg-icons/faSpinner';

@Component({
  selector: 'ng-nig-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  jobs: JobModel[] = [];
  p = 1;
  loadingData: boolean;
  faSpinner = faSpinner;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): void {
    this.loadingData = true;
    this.appService.getJobs().subscribe(res => {
      this.loadingData = false;
      this.jobs = res;
    });
  }

}
