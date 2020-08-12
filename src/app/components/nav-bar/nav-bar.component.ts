import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Event, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'ng-nig-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  stickify: boolean;
  private navUrl: string;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.navUrl = event.url;
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if ((window.pageYOffset >= 120) || (this.navUrl !== '/') ) {
      this.stickify = true;
    } else if ((window.pageYOffset === 0) && (this.navUrl === '/')) {
      this.stickify = false;
    }
  }

  ngOnInit(): void {
  }

}
