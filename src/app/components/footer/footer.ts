import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faInstagram, faVk, faTiktok, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { TrackClickDirective } from '../../track-click.directive';

@Component({
  selector: 'app-footer',
  imports: [FaIconComponent, TrackClickDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly faInstagram = faInstagram;
  protected readonly faVk = faVk;
  protected readonly faTiktok = faTiktok;
  protected readonly faTelegram = faTelegram;
}
