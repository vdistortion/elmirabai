import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { TrackClickDirective } from '../../track-click.directive';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-description',
  imports: [NgOptimizedImage, FaIconComponent, TrackClickDirective],
  templateUrl: './description.html',
  styleUrl: './description.scss',
})
export class Description {
  protected readonly faTelegram = faTelegram;
  protected readonly faInstagram = faInstagram;
  protected readonly environment = environment;
}
