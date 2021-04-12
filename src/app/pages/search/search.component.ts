import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { YouTubeService } from '../../api/you-tube/you-tube.service';
@Component({
  selector: 'sfi-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchParam$ = this.activatedRoute.queryParamMap.pipe(map((params) => params.get('q')));

  videos$ = this.searchParam$.pipe(
    switchMap((searchValue) => this.youTubeService.getVideos({ q: searchValue })),
    map((response) => response.items),
  );

  constructor(private activatedRoute: ActivatedRoute, private youTubeService: YouTubeService) {}
}
