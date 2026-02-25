import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScriptLoaderService {
  private loaded = new Map<string, Promise<HTMLScriptElement>>();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  load(src: string): Promise<HTMLScriptElement> {
    if (!isPlatformBrowser(this.platformId)) {
      return Promise.reject(new Error('Script loading attempted on the server'));
    }

    if (this.loaded.has(src)) {
      return this.loaded.get(src)!;
    }

    const existing = this.document.querySelector(
      `script[src="${src}"]`,
    ) as HTMLScriptElement | null;

    if (existing) {
      return Promise.resolve(existing);
    }

    const promise = new Promise<HTMLScriptElement>((resolve, reject) => {
      const script = this.document.createElement('script');
      script.src = src;
      script.async = true;
      script.defer = true;

      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));

      this.document.head.appendChild(script);
    });

    this.loaded.set(src, promise);

    return promise;
  }
}
