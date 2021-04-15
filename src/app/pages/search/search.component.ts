import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { finalize, map, switchMap, tap } from 'rxjs/operators';
import { YouTubeService } from '../../api/you-tube/you-tube.service';

@Component({
  selector: 'sfi-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchParam$ = this.activatedRoute.queryParamMap.pipe(map((params) => params.get('q')));

  videos$ = this.searchParam$.pipe(
    tap(() => this.loadingBarService.useRef().start()),
    switchMap((searchValue) => this.youTubeService.getVideos({ q: searchValue })),
    map((response) => response.items),
    tap(() => this.loadingBarService.useRef().complete()),
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private youTubeService: YouTubeService,
    private loadingBarService: LoadingBarService,
  ) {}
}
