import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ng-nig-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {


  eventMemories = [];
  p = 1;
  faSpinner = faSpinner;
  loadingData: boolean;

  constructor(private appService: AppService) {
  }

  getEventMemories(): void{
    this.loadingData = true;
    this.appService.getEventMemories().subscribe(res => {
      this.loadingData = false;
      this.eventMemories = res.filter(e => e.isPast === true);
    });
  }

  ngOnInit(): void {
    this.getEventMemories();
  }

}
