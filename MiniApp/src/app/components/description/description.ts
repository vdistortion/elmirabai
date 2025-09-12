import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

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
}
