import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { TrackClickDirective } from '../../track-click.directive';

@Component({
  selector: 'app-description',
  imports: [FaIconComponent, TrackClickDirective],
  templateUrl: './description.html',
  styleUrl: './description.scss',
})
export class Description {
  protected readonly faTelegram = faTelegram;
  protected readonly faInstagram = faInstagram;
}
