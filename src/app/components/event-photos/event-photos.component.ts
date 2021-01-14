import {Component, Input, OnInit} from '@angular/core';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faCalendar, faClock} from '@fortawesome/free-regular-svg-icons';
import {Gallery, GalleryItem, ImageItem} from '@ngx-gallery/core';
import {EventModel} from '../../models/events';

@Component({
  selector: 'ng-nig-event-photos',
  templateUrl: './event-photos.component.html',
  styleUrls: ['./event-photos.component.scss']
})
export class EventPhotosComponent implements OnInit {

  @Input() theEvent: EventModel;

  locationIcon = faMapMarkerAlt;
  clockIcon = faClock;
  calenderIcon = faCalendar;
  sample: GalleryItem[] = [];
  ref: string;

  constructor(public gallery: Gallery) {
  }

  ngOnInit(): void {
    if (this.theEvent.eventPictures !== undefined) {
      this.theEvent.eventPictures.forEach((data, i) => {
          this.sample.push(new ImageItem({src: data, thumb: data}));
      });
    }
    this.basicLightboxExample();
  }

  basicLightboxExample(): void {
    this.ref = 'ref' + this.theEvent.id;
    this.gallery.ref(this.ref).load(this.sample);
  }

}
