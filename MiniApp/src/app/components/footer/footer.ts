import { Component, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faInstagram, faVk, faTiktok, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { Analytics } from '../../services/analytics.service';

@Component({
  selector: 'app-footer',
  imports: [
    FaIconComponent
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  faInstagram = faInstagram;
  faVk = faVk;
  faTiktok = faTiktok;
  faTelegram = faTelegram;
  analytics = inject(Analytics);

  onClick(event: string) {
    this.analytics.sendEvent(event, { category: 'UI' });
  }
}
