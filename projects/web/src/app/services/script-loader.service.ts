import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScriptLoaderService {
  private loaded = new Map<string, Promise<HTMLScriptElement>>();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  load(src: string, isReady?: () => boolean): Promise<HTMLScriptElement> {
    if (!isPlatformBrowser(this.platformId)) {
      return Promise.reject(new Error('Script loading attempted on the server'));
    }

    const url = new URL(src, this.document.baseURI).href;
    const pending = this.loaded.get(url);
    if (pending) {
      return pending;
    }

    const existing = Array.from(this.document.scripts).find((script) => script.src === url);
    if (existing && isReady?.()) {
      return Promise.resolve(existing);
    }

    const script = existing ?? this.document.createElement('script');
    const promise = new Promise<HTMLScriptElement>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        script.removeEventListener('load', onLoad);
        script.removeEventListener('error', onError);
      };
      const fail = (message: string) => {
        cleanup();
        script.remove();
        reject(new Error(message));
      };
      const onLoad = () => {
        if (isReady && !isReady()) {
          fail(`Script loaded without the expected API: ${url}`);
          return;
        }
        cleanup();
        resolve(script);
      };
      const onError = () => fail(`Failed to load script: ${url}`);
      const timeout = setTimeout(() => fail(`Script loading timed out: ${url}`), 15_000);

      script.addEventListener('load', onLoad, { once: true });
      script.addEventListener('error', onError, { once: true });

      if (!existing) {
        script.src = url;
        script.async = true;
        this.document.head.appendChild(script);
      }
    }).catch((error: unknown) => {
      this.loaded.delete(url);
      throw error;
    });

    this.loaded.set(url, promise);

    return promise;
  }
}
