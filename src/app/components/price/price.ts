import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import type { SwiperOptions } from 'swiper/types';
import { Videoplayer } from '../videoplayer/videoplayer';
import { SwiperDirective } from '../../swiper.directive';
import { TrackClickDirective } from '../../track-click.directive';
import { environment } from '../../../environments/environment';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-price',
  imports: [SwiperDirective, TrackClickDirective, Videoplayer, Icon],
  templateUrl: './price.html',
  styleUrl: './price.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Price {
  protected readonly environment = environment;
  protected options: SwiperOptions = {
    slidesPerView: 1.2,
    spaceBetween: 7,
    slidesOffsetBefore: 14,
    slidesOffsetAfter: 14,
    breakpoints: {
      '768': {
        enabled: false,
        slidesPerView: 2,
        spaceBetween: 14,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },
    },
  };
}
