import { Component, Input, OnInit } from '@angular/core';
import { YouTubeVideo } from '../../api/you-tube/you-tube.models';

@Component({
  selector: 'sfi-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss'],
})
export class VideoPreviewComponent {
  @Input() video: YouTubeVideo;
}
