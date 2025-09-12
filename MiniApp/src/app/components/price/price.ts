import { Component, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { Analytics } from '../../services/analytics.service';

@Component({
  selector: 'app-price',
  imports: [
    FaIconComponent
  ],
  templateUrl: './price.html',
  styleUrl: './price.scss'
})
export class Price {
  faTelegram = faTelegram;
  analytics = inject(Analytics);

  onClick(event: string) {
    this.analytics.sendEvent(event, { category: 'UI' });
  }
}
