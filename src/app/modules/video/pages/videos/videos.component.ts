import { Component } from '@angular/core';
import { YouTubeVideo } from 'src/app/api/youtube/youtube.models';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'sfi-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent {
  videos$ = this.activatedRoute.data.pipe(pluck('videos'));

  constructor(private activatedRoute: ActivatedRoute) {}

  openVideo(video: YouTubeVideo) {
    console.log(video);
  }
}
