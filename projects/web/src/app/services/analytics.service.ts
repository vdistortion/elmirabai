import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, InjectionToken, isDevMode, PLATFORM_ID } from '@angular/core';
import { ScriptLoaderService } from './script-loader.service';

interface AnalyticsConfig {
  enabled: boolean;
  ymId: number;
  allowedHosts: readonly string[];
}

export const ANALYTICS_CONFIG = new InjectionToken<AnalyticsConfig>('AnalyticsConfig');

@Injectable({
  providedIn: 'root',
})
export class Analytics {
  private readonly config = inject(ANALYTICS_CONFIG);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly scriptLoader = inject(ScriptLoaderService);
  private initialized = false;
  private scriptRequested = false;

  initialize(): void {
    if (!this.canTrack()) {
      return;
    }

    const ymId = this.config.ymId;
    if (!this.initialized) {
      if (!window.ym) {
        const queue = ((...args: unknown[]) => {
          (queue.a ??= []).push(args);
        }) as YandexMetrika;
        queue.l = Date.now();
        window.ym = queue;
      }
      window.ym(ymId, 'init', {
        webvisor: true,
        clickmap: true,
        accurateTrackBounce: true,
        trackLinks: true,
      });
      this.initialized = true;
    }

    if (!this.scriptRequested) {
      this.scriptRequested = true;
      void this.scriptLoader.load(`https://mc.yandex.ru/metrika/tag.js?id=${ymId}`).catch(() => {
        this.scriptRequested = false;
        console.warn('[Analytics] Yandex Metrika could not be loaded');
      });
    }
  }

  sendEvent(eventName: string, params: YMEventParams): void {
    if (!this.canTrack()) {
      return;
    }

    this.initialize();
    window.ym?.(this.config.ymId, 'reachGoal', eventName, params);
  }

  private canTrack(): boolean {
    return (
      isPlatformBrowser(this.platformId) &&
      !isDevMode() &&
      this.config.enabled &&
      this.config.allowedHosts.includes(this.document.location.hostname)
    );
  }
}
