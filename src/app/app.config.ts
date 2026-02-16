import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { routes } from './app.routes';
import { ANALYTICS_CONFIG } from './services/analytics.service';
import { environment } from '../environments/environment';

register();

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: ANALYTICS_CONFIG, useValue: { ymId: environment.YandexMetrikaId } },
  ],
};
