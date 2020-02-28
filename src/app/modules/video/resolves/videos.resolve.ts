import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { YoutubeVideos } from 'src/app/api/youtube/youtube.models';
import { Observable } from 'rxjs';
import { YoutubeService } from 'src/app/api/youtube/youtube.service';

@Injectable({
  providedIn: 'root',
})
export class VideosResolve implements Resolve<YoutubeVideos> {
  constructor(private youtubeService: YoutubeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): YoutubeVideos | Observable<YoutubeVideos> | Promise<YoutubeVideos> {
    const params: any = {};
    if (route.queryParamMap.has('q')) {
      params.q = route.queryParamMap.get('q');
    }
    return this.youtubeService.getYoutubeList(params);
  }
}
