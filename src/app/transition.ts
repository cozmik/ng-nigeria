import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

export const fadeInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
      query(':enter', [
        style({ opacity: '0' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ opacity: '0.5' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '1' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '0' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '0.5' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '1' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
