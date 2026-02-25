import {
  afterNextRender,
  Component,
  computed,
  DOCUMENT,
  ElementRef,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ScriptLoaderService } from '../../services/script-loader.service';
import { environment } from '../../../environments/environment';

declare global {
  interface Window {
    VK: {
      VideoPlayer?: Function;
    };
  }
}

@Component({
  selector: 'app-videoplayer',
  imports: [],
  templateUrl: './videoplayer.html',
  styleUrl: './videoplayer.scss',
})
export class Videoplayer {
  private readonly loadScript = inject(ScriptLoaderService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly _document = inject(DOCUMENT);
  private readonly _window = this._document.defaultView as any;

  public videoId = input.required<number>();
  public oid = input<number>(environment.oid);

  private iframe = viewChild<ElementRef<HTMLIFrameElement>>('videoplayer');

  protected safeUrl = computed(() => {
    const url = `https://vk.com/video_ext.php?oid=${this.oid()}&id=${this.videoId()}&hd=2&autoplay=1&loop=1&js_api=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });

  constructor() {
    afterNextRender(() => {
      this.loadScript
        .load('https://vk.com/js/api/videoplayer.js')
        .then(() => {
          this.initPlayer();
        })
        .catch(console.error);
    });
  }

  private initPlayer() {
    const frame = this.iframe()?.nativeElement;
    if (frame && this._window.VK) {
      const player = this._window.VK.VideoPlayer(frame);

      player.on('inited', () => {
        player.mute();
      });
    }
  }
}
