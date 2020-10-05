import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { YoutubeService } from '../../../../api/youtube/youtube.service';
import { YouTubeVideo } from '../../../../api/youtube/youtube.models';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'sfi-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoCardComponent {
  @Input() video: YouTubeVideo;

  @HostBinding('class.card')
  @HostBinding('class.h-100')
  hostClasses = true;

  preview = false;

  get safeUrl(): SafeResourceUrl {
    return this.youtubeService.getVideoUrl(this.video.id.videoId, { autoplay: '1', controls: '0' });
  }

  constructor(private youtubeService: YoutubeService) {}

  handleMouseEnter() {
    this.preview = true;
  }

  handleMouseLeave() {
    this.preview = false;
  }
}
