import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import type { SwiperOptions } from 'swiper/types';
import { A11y, Keyboard } from 'swiper/modules';
import a11yStyles from 'swiper/element/css/a11y' with { loader: 'text' };
import { Videoplayer } from '../videoplayer/videoplayer';
import { Icon } from '../icon/icon';
import { SwiperDirective } from '../../swiper.directive';
import { TrackClickDirective } from '../../track-click.directive';
import { siteContent } from '../../content/site-content';

@Component({
  selector: 'app-price',
  imports: [SwiperDirective, TrackClickDirective, Videoplayer, Icon],
  templateUrl: './price.html',
  styleUrl: './price.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Price {
  protected readonly contacts = siteContent.contacts;
  protected options: SwiperOptions = {
    modules: [A11y, Keyboard],
    injectStyles: [a11yStyles],
    keyboard: { enabled: true, onlyInViewport: true, pageUpDown: false },
    a11y: {
      containerMessage: 'Тарифы курса',
      containerRoleDescriptionMessage: 'Карусель',
      itemRoleDescriptionMessage: 'Тариф',
      slideLabelMessage: '{{index}} из {{slidesLength}}',
    },
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
