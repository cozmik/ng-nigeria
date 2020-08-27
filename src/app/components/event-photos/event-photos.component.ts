import {Component, Input, OnInit} from '@angular/core';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faCalendar, faClock} from '@fortawesome/free-regular-svg-icons';
import {Gallery, GalleryItem, ImageItem} from '@ngx-gallery/core';

@Component({
  selector: 'ng-nig-event-photos',
  templateUrl: './event-photos.component.html',
  styleUrls: ['./event-photos.component.scss']
})
export class EventPhotosComponent implements OnInit {

  @Input() theEvent: {
    id: number;
    eventName: string;
    date: string;
    time: string;
    location: string;
    pictures: [
      {
        url: string;
        description: string;
      }]
  };

  locationIcon = faMapMarkerAlt;
  clockIcon = faClock;
  calenderIcon = faCalendar;
  sample: GalleryItem[] = [];
  ref: string;

  constructor(public gallery: Gallery) {
  }

  ngOnInit(): void {
    this.theEvent.pictures.forEach((data, i) => {
        this.sample.push(new ImageItem({src: data.url, thumb: data.url, caption: data.description}));
    });
    this.basicLightboxExample();
  }

  basicLightboxExample(): void {
    this.ref = 'ref' + this.theEvent.id;
    this.gallery.ref(this.ref).load(this.sample);
  }

}
