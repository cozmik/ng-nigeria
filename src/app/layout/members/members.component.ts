import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {Member} from '../../models/members';

@Component({
  selector: 'ng-nig-members',
  templateUrl: './members.component.html',
  styleUrls: ['../../components/tab-style.scss', './members.component.scss']
})
export class MembersComponent implements OnInit {
  members: Array<Member>;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void{
    this.appService.getMembers().subscribe(res => {
      this.members = res;
    });
  }
}
