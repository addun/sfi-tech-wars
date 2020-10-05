import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { YouTubeVideo } from '../../../../api/youtube/youtube.models';

@Component({
  selector: 'sfi-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss'],
})
export class PlaylistCardComponent  {
  @Input() playlist:YouTubeVideo;

  @HostBinding('class.card')
  @HostBinding('class.h-100')
  hostClasses = true;
  
}
