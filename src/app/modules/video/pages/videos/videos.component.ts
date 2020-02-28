import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { YoutubeVideos } from 'src/app/api/youtube/youtube.models';

@Component({
  selector: 'sfi-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent {
  videos$: Observable<YoutubeVideos> = this.activatedRoute.data.pipe(pluck('videos'));

  constructor(private activatedRoute: ActivatedRoute) {}
}
