import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TrackClickDirective } from '../../track-click.directive';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage, TrackClickDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
