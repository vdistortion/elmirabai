import { afterNextRender, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Analytics } from './services/analytics.service';
import { AnalyticsPixel } from './components/analytics-pixel/analytics-pixel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AnalyticsPixel],
  templateUrl: './app.html',
})
export class App {
  private readonly analytics = inject(Analytics);

  constructor() {
    afterNextRender(() => this.analytics.initialize());
  }
}
