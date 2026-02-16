import { DOCUMENT, inject, Injectable, InjectionToken } from '@angular/core';

declare global {
  interface Window {
    ym?: Function;
  }
}

export const ANALYTICS_CONFIG = new InjectionToken<{ ymId: number }>('AnalyticsConfig');

@Injectable({
  providedIn: 'root',
})
export class Analytics {
  private readonly config = inject(ANALYTICS_CONFIG, { optional: true });
  private readonly _document = inject(DOCUMENT);
  private readonly _window = this._document.defaultView as any;

  sendEvent(eventName: string, params: Record<string, any> = { category: 'UI' }) {
    const ymId = this.config?.ymId;

    if (this._window && typeof this._window.ym === 'function') {
      this._window.ym(ymId, 'reachGoal', eventName, params);
      console.info(`[Analytics] Event sent: ${eventName}`, params, ymId);
    }
  }
}
