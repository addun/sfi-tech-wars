import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { YouTubeService } from '../../api/you-tube/you-tube.service';

@Component({
  selector: 'sfi-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
  iframeUrl$ = this.activatedRoute.paramMap.pipe(
    map((params) => params.get('videoId')),
    map((videoId) => this.youTubeService.getIframeUrl(videoId, { autoplay: '1' })),
  );

  constructor(private activatedRoute: ActivatedRoute, private youTubeService: YouTubeService) {}
}
