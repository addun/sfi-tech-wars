import { Component, OnInit } from '@angular/core';
import { YoutubeVideosResponse } from 'src/app/api/youtube/youtube.models';
import { YoutubeService } from 'src/app/api/youtube/youtube.service';
import { ActivatedRoute } from '@angular/router';
import { pluck, delay } from 'rxjs/operators';

@Component({
  selector: 'sfi-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  videosResponse: YoutubeVideosResponse;
  loadingMore = false;

  constructor(private activatedRoute: ActivatedRoute, private youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(pluck('videos'))
      .subscribe((response: YoutubeVideosResponse) => (this.videosResponse = response));
  }

  loadMore(pageToken: string) {
    this.loadingMore = true;
    this.youtubeService.getVideos({ pageToken }).subscribe((response: YoutubeVideosResponse) => {
      response.items.unshift(...this.videosResponse.items);
      this.videosResponse = response;
      this.loadingMore = false;
    });
  }
}
