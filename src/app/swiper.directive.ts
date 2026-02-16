import { afterNextRender, Directive, ElementRef, input } from '@angular/core';
import type { SwiperOptions } from 'swiper/types';

@Directive({
  selector: '[appSwiper]',
})
export class SwiperDirective {
  public config = input<SwiperOptions>();

  constructor(private el: ElementRef<HTMLElement>) {
    afterNextRender(() => {
      Object.assign(this.el.nativeElement, this.config());

      // @ts-ignore
      this.el.nativeElement.initialize();
    });
  }
}
