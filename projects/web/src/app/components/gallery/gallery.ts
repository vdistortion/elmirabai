import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { A11y, Keyboard, Navigation } from 'swiper/modules';
import navigationStyles from 'swiper/element/css/navigation' with { loader: 'text' };
import a11yStyles from 'swiper/element/css/a11y' with { loader: 'text' };
import type { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '../../swiper.directive';

@Component({
  selector: 'app-gallery',
  imports: [NgOptimizedImage, SwiperDirective],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Gallery {
  protected options: SwiperOptions = {
    modules: [Navigation, A11y, Keyboard],
    injectStyles: [navigationStyles, a11yStyles],
    keyboard: { enabled: true, onlyInViewport: true, pageUpDown: false },
    a11y: {
      containerMessage: 'Отзывы учениц',
      containerRoleDescriptionMessage: 'Карусель',
      itemRoleDescriptionMessage: 'Слайд',
      prevSlideMessage: 'Предыдущий отзыв',
      nextSlideMessage: 'Следующий отзыв',
      firstSlideMessage: 'Первый отзыв',
      lastSlideMessage: 'Последний отзыв',
      slideLabelMessage: '{{index}} из {{slidesLength}}',
    },
    slidesPerView: 1,
    navigation: true,
    autoHeight: true,
  };
}
