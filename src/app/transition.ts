import {animate, query, style, transition, trigger} from '@angular/animations';

export const fadeInAnimation =
  trigger('fadeInAnimation', [
    // route 'enter' transition
    transition('* <=> *', [
    transition(':enter', [

      // css styles at start of transition
      style({ opacity: 0 }),

      // animation and styles at end of transition
      animate('1s', style({ opacity: 1 }))
    ]),
      ])
  ]);
