import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Videoplayer } from '../videoplayer/videoplayer';

@Component({
  selector: 'app-reviews',
  imports: [Videoplayer],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Reviews {}
