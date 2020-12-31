import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'ng-nig-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {


  eventMemories = [];
  p = 1;

  constructor(private appService: AppService) {
  }

  getEventMemories(): void{
    this.appService.getEventMemories().subscribe(res => {
      this.eventMemories = res.filter(e => e.isPast === true);
    });
  }

  ngOnInit(): void {
    this.getEventMemories();
  }

}
