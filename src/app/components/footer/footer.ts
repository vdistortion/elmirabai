import { Component } from '@angular/core';
import { Icon } from '../icon/icon';
import { TrackClickDirective } from '../../track-click.directive';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  imports: [TrackClickDirective, Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly environment = environment;
}
