import { afterNextRender, Directive, ElementRef, input } from '@angular/core';
import type { SwiperOptions } from 'swiper/types';
import type { SwiperContainer } from 'swiper/element';

@Directive({
  selector: '[appSwiper]',
})
export class SwiperDirective {
  public config = input<SwiperOptions>();

  constructor(private el: ElementRef<HTMLElement>) {
    afterNextRender(() => {
      const swiperEl = Object.assign(this.el.nativeElement, this.config()) as SwiperContainer;
      swiperEl.initialize();
    });
  }
}
