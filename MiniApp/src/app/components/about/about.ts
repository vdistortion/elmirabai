import { Component, inject } from '@angular/core';
import { Analytics } from '../../services/analytics.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  analytics = inject(Analytics);

  onClick(event: string) {
    this.analytics.sendEvent(event, { category: 'UI' });
  }
}
