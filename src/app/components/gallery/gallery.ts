import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Navigation } from 'swiper/modules';
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
    modules: [Navigation],
    slidesPerView: 1,
    navigation: true,
    autoHeight: true,
  };
}
