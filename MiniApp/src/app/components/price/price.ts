import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

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
}
