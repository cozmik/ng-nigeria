import {Component, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import videojs from 'video.js';
import {faPlay} from '@fortawesome/free-solid-svg-icons/faPlay';
import {faShareAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'ng-nig-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class VideoPlayerComponent implements OnInit, OnDestroy {

  @ViewChild('target', {static: true}) target: ElementRef;
  @Input() height: string;
  @Input() width: string;
  @Input() title: string;

  shareIcon = faShareAlt;

  @Input() options: {
    fluid: boolean,
    aspectRatio: string,
    autoplay: boolean,
    fill: true,
    sources: {
      src: string,
      type: string,
    }[],
  };
  player: videojs.Player;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // instantiate Video.js
    this.player = videojs(this.target.nativeElement, this.options, () => {
      this.renderer.setStyle(this.target.nativeElement, 'opacity', '.5');
    });

    this.player.on('pause', (e) => {
      this.renderer.setStyle(this.target.nativeElement, 'opacity', '.5');
    });

    this.player.on('play', (e) => {
      this.renderer.setStyle(this.target.nativeElement, 'opacity', '1');
    });
  }

  // @HostListener()

  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }

}
