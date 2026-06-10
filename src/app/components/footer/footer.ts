import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TrackClickDirective } from '../../track-click.directive';
import { environment } from '../../../environments/environment';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-footer',
  imports: [TrackClickDirective, Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly environment = environment;
}
