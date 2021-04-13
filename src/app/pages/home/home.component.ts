import { Component } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { defer } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { YouTubeService } from '../../api/you-tube/you-tube.service';

@Component({
  selector: 'sfi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  videos$ = defer(() => {
    this.loadingBarService.useRef().start();
    return this.youTubeService.getRecommendedVideos();
  }).pipe(
    map((response) => response.items),
    finalize(() => this.loadingBarService.useRef().complete()),
  );

  constructor(private youTubeService: YouTubeService, private loadingBarService: LoadingBarService) {}
}
