import { Directive, HostListener, inject, input } from '@angular/core';
import { Analytics } from './services/analytics.service';

@Directive({
  selector: '[appTrackClick]',
})
export class TrackClickDirective {
  public eventName = input.required<string>({ alias: 'appTrackClick' });
  public eventParams = input<Record<string, any>>({});
  private analytics = inject(Analytics);

  @HostListener('click')
  onClick() {
    this.analytics.sendEvent(this.eventName(), this.eventParams());
  }
}
