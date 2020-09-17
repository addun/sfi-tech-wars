import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { YouTubeVideo } from '../../../../api/youtube/youtube.models';

@Component({
  selector: 'sfi-channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChannelCardComponent {
  @Input() channel: YouTubeVideo;

  @HostBinding('class.card')
  @HostBinding('class.h-100')
  hostClasses = true;
}
