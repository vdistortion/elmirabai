import { inject, Injectable, InjectionToken } from '@angular/core';

export const ANALYTICS_CONFIG = new InjectionToken<{ ymId: number }>('AnalyticsConfig');

@Injectable({
  providedIn: 'root',
})
export class Analytics {
  private readonly config = inject(ANALYTICS_CONFIG, { optional: true });

  sendEvent(eventName: string, params: YMEventParams) {
    const ymId = this.config?.ymId;

    if (ymId && window && typeof window.ym === 'function') {
      window.ym(ymId, 'reachGoal', eventName, params);
      console.info(`[Analytics] Event sent: ${eventName}`, params, ymId);
    }
  }
}
