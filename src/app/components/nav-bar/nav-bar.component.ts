import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Event, ResolveEnd, Router} from '@angular/router';

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
      if (event instanceof ResolveEnd) {
        if (event.url) {
          this.navUrl = event.url;
          this.setNavBarProps();
        }
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.setNavBarProps();
  }

  setNavBarProps(): void {
    if ((window.pageYOffset >= 120) || (this.navUrl !== '/')) {
      this.stickify = true;
    } else if ((window.pageYOffset === 0) && (this.navUrl === '/')) {
      this.stickify = false;
    }
  }

  ngOnInit(): void {
  }

}
