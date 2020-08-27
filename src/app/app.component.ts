import {Component, HostListener} from '@angular/core';
import {fadeInAnimation} from './transition';

@Component({
  selector: 'ng-nig-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-nigeria';

  constructor() {
  }
}
