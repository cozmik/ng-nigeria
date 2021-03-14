import {Component, OnInit, ViewChild} from '@angular/core';
import {Member} from '../../models/members';
import {AppService} from '../../app.service';
import {MatDialog} from '@angular/material/dialog';
import {SocialMediaModalComponent} from '../../components/modal/social-media-modal/social-media-modal.component';
import {ToastrService} from 'ngx-toastr';
import {faQuestionCircle} from '@fortawesome/free-regular-svg-icons/faQuestionCircle';

@Component({
  selector: 'ng-nig-membership-form',
  templateUrl: './membership-form.component.html',
  styleUrls: ['./membership-form.component.scss', '../../components/form.styles.scss']
})
export class MembershipFormComponent implements OnInit {
  emptyData: Member = {
    firstName: '',
    lastName: '',
    jobRole: '',
    profilePix: '',
    number: '',
    type: 'member',
    email: '',
    socialHandles: [],
    company: '',
    code: '',
  };

  question = faQuestionCircle;

  memberData = {...this.emptyData};

  submittingRequest: boolean;

  @ViewChild('fileInput') fileInputVariable: any;
  private socialMedias: { _id: string, name: string }[];
  mediaCount: number;

  constructor(public appService: AppService, private dialog: MatDialog, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getSocialHandles();
  }

  submitData(): void {
    this.submittingRequest = true;
    this.appService.becomeAMember(this.memberData).subscribe((res) => {
      this.submittingRequest = false;
      this.memberData.socialHandles = [];
      this.memberData = {...this.emptyData};
      this.toastr.success('Your details has been submitted', 'Success!');
    }, err => {
      this.submittingRequest = false;
      const errMsg = err.error ? err.error : 'Sorry, something went wrong!!';
      this.toastr.error(errMsg, 'Error!');
    });
  }

  getSocialHandles(): void {
    this.appService.getSocialMedias().subscribe(res => {
      this.socialMedias = res;
      this.mediaCount = this.socialMedias.length;
    });
  }

  removeHandle(handle): void {
    this.memberData.socialHandles = this.memberData.socialHandles.filter(s => s.media._id !== handle._id);
  }

  openSocialModal(): void {
    const shownMedia = this.socialMedias.filter(s => !this.memberData.socialHandles.find((m: any) => s._id === m.media._id));
    if (shownMedia.length > 0) {
      const dialogRef = this.dialog.open(SocialMediaModalComponent, {
        width: '450px',
        data: {medias: shownMedia}
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.memberData.socialHandles.push(result.media);
          this.mediaCount = this.socialMedias.filter(s => !this.memberData.socialHandles.find((m: any) => s._id === m.media._id)).length;
        }
      });
    }
  }
}
