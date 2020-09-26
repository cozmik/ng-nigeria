import {Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Event, ResolveEnd, Router} from '@angular/router';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';

@Component({
  selector: 'ng-nig-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  stickify: boolean;
  private navUrl: string;
  harmBuggerIcon = faBars;
  @ViewChild('navbarSupportedContent') navbarContent: ElementRef;
  @ViewChild('navbarToggler') toggler: ElementRef;
  closeIcon = faTimes;
  showMenu: boolean;

  constructor(private router: Router, private render: Renderer2) {
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
