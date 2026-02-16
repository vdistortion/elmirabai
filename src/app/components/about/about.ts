import { Component } from '@angular/core';
import { TrackClickDirective } from '../../track-click.directive';

@Component({
  selector: 'app-about',
  imports: [TrackClickDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
