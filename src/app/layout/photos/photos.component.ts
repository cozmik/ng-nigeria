import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ng-nig-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {


  eventMemories = [
    {
      id: 1,
      eventName: 'Angular for Everyone',
      date: 'October 3, 2019',
      time: '11:00AM - 1:00PM',
      location: 'Terragon Group. 2, Ahmed Onibudo street, Off Adeola Hopewell,Victoria Island, Lagos, Nigeria.',

      pictures: [
        {
        desc: 'just talk',
        url: 'assets/images/landing_bg.png',
      },
        {
          desc: 'just talk',
          url: 'assets/images/single-event.png'
        },
        {
          desc: 'just talk',
          url: 'assets/images/angular-event-sample.png'
        },
        {
          desc: 'just talk',
          url: 'assets/images/single-event.png'
        },
        {
          desc: 'just talk',
          url: 'assets/images/landing_bg.png'
        },
        {
          desc: 'just talk',
          url: 'assets/images/angular-event-sample.png'
        },
        {
          desc: 'just talk',
          url: 'assets/images/single-event.png'
        },
      ]
    },
    {
      id: 2,
      eventName: 'Angular for Everyone',
      date: 'October 3, 2019',
      time: '11:00AM - 1:00PM',
      location: 'Terragon Group. 2, Ahmed Onibudo street, Off Adeola Hopewell,Victoria Island, Lagos, Nigeria.',

      pictures: [{
        desc: 'just talk',
        url: 'assets/images/landing_bg.png',
      },
        {
          desc: 'just talk',
          url: 'assets/images/single-event.png'
        },
        {
          desc: 'just talk',
          url: 'assets/images/angular-event-sample.png'
        },
        {
          desc: 'just talk',
          url: 'assets/images/landing_bg.png'
        },
        {
          desc: 'just talk',
          url: 'assets/images/angular-event-sample.png'
        }
      ]
    },
    {
      id: 3,
      eventName: 'Angular for Everyone',
      date: 'October 3, 2019',
      time: '11:00AM - 1:00PM',
      location: 'Terragon Group. 2, Ahmed Onibudo street, Off Adeola Hopewell,Victoria Island, Lagos, Nigeria.',

      pictures: [{
        desc: 'just talk',
        url: 'assets/images/landing_bg.png',
      },
        {
          desc: 'just talk',
          url: 'assets/images/single-event.png'
        },
        {
          desc: 'just talk',
          url: 'assets/images/angular-event-sample.png'
        },
        {
          desc: 'just talk',
          url: 'assets/images/landing_bg.png'
        },
        {
          desc: 'just talk',
          url: 'assets/images/angular-event-sample.png'
        }
      ]
    },
    {
      id: 4,
      eventName: 'Angular for Everyone',
      date: 'October 3, 2019',
      time: '11:00AM - 1:00PM',
      location: 'Terragon Group. 2, Ahmed Onibudo street, Off Adeola Hopewell,Victoria Island, Lagos, Nigeria.',

      pictures: [{
        desc: 'just talk',
        url: 'assets/images/landing_bg.png',
      },
        {
          desc: 'just talk',
          url: 'assets/images/single-event.png'
        },
        {
          desc: 'just talk',
          url: 'assets/images/angular-event-sample.png'
        },
        {
          desc: 'just talk',
          url: 'assets/images/landing_bg.png'
        },
        {
          desc: 'just talk',
          url: 'assets/images/angular-event-sample.png'
        }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
