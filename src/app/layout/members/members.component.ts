import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {Member} from '../../models/members';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ng-nig-members',
  templateUrl: './members.component.html',
  styleUrls: ['../../components/tab-style.scss', './members.component.scss']
})
export class MembersComponent implements OnInit {
  members: Array<Member>;
  loadingData: boolean;
  faSpinner = faSpinner;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void{
    this.loadingData = true;
    this.appService.getMembers().subscribe(res => {
      this.loadingData = false;
      this.members = res;
    });
  }
}
