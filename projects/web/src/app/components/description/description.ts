import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Icon } from '../icon/icon';
import { TrackClickDirective } from '../../track-click.directive';
import { siteContent } from '../../content/site-content';

@Component({
  selector: 'app-description',
  imports: [NgOptimizedImage, TrackClickDirective, Icon],
  templateUrl: './description.html',
  styleUrl: './description.scss',
})
export class Description {
  protected readonly contacts = siteContent.contacts;
}
