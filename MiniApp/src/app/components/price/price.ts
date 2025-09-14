import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import type { SwiperOptions } from 'swiper/types';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { Analytics } from '../../services/analytics.service';
import { SwiperDirective } from '../../swiper.directive';

@Component({
  selector: 'app-price',
  imports: [FaIconComponent, SwiperDirective],
  templateUrl: './price.html',
  styleUrl: './price.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Price {
  faTelegram = faTelegram;
  analytics = inject(Analytics);
  options: SwiperOptions = {
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

  onClick(event: string) {
    this.analytics.sendEvent(event, { category: 'UI' });
  }
}
