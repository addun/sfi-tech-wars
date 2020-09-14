import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { YoutubeService } from 'src/app/api/youtube/youtube.service';
import { YoutubeVideosResponse } from 'src/app/api/youtube/youtube.models';

@Injectable({
  providedIn: 'root',
})
export class VideosResolve implements Resolve<YoutubeVideosResponse> {
  constructor(private youtubeService: YoutubeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<YoutubeVideosResponse> {
    return this.youtubeService.getVideos(route.queryParams);
  }
}
