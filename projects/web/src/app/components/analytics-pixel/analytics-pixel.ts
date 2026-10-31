import { isPlatformServer } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { ANALYTICS_CONFIG } from '../../services/analytics.service';

@Component({
  selector: 'noscript[appAnalyticsPixel]',
  host: { ngSkipHydration: 'true' },
  template: `
    @if (pixelUrl) {
      <div>
        <img [src]="pixelUrl" style="position: absolute; left: -9999px" alt="" />
      </div>
    }
  `,
})
export class AnalyticsPixel {
  private readonly config = inject(ANALYTICS_CONFIG);

  // With scripting enabled, browsers parse noscript contents as text, not DOM nodes.
  // Skip hydration here and render no client-side image to avoid duplicate page views.
  protected readonly pixelUrl =
    isPlatformServer(inject(PLATFORM_ID)) && this.config.enabled
      ? `https://mc.yandex.ru/watch/${this.config.ymId}`
      : null;
}
