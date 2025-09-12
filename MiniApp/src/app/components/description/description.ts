import { Component, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { Analytics } from '../../services/analytics.service';

@Component({
  selector: 'app-description',
  imports: [
    FaIconComponent
  ],
  templateUrl: './description.html',
  styleUrl: './description.scss'
})
export class Description {
  protected readonly faTelegram = faTelegram;
  protected readonly faInstagram = faInstagram;
  analytics = inject(Analytics);

  onClick(event: string) {
    this.analytics.sendEvent(event, { category: 'UI' });
  }
}
