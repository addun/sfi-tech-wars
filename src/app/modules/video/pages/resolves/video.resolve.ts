import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { YoutubeVideos } from 'src/app/api/youtube/youtube.models';
import { Observable } from 'rxjs';
import { YoutubeService } from 'src/app/api/youtube/youtube.service';

@Injectable({
  providedIn: 'root',
})
export class VideoResolve implements Resolve<YoutubeVideos> {
  constructor(private youtubeService: YoutubeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): YoutubeVideos | Observable<YoutubeVideos> | Promise<YoutubeVideos> {
    return this.youtubeService.getYoutubeList({ q: route.queryParamMap.get('q') });
  }
}
