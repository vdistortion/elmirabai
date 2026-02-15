import { Component, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faInstagram, faVk, faTiktok, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { Analytics } from '../../services/analytics.service';

@Component({
  selector: 'app-footer',
  imports: [FaIconComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly faInstagram = faInstagram;
  protected readonly faVk = faVk;
  protected readonly faTiktok = faTiktok;
  protected readonly faTelegram = faTelegram;
  private analytics = inject(Analytics);

  onClick(event: string) {
    this.analytics.sendEvent(event, { category: 'UI' });
  }
}
