import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TrackClickDirective } from '../../track-click.directive';
import { siteContent } from '../../content/site-content';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage, TrackClickDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly contacts = siteContent.contacts;
}
