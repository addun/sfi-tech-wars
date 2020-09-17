import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeVideosResponse, YoutubeVideosRequest } from './youtube.models';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CommentThreadResponse } from './comment-thread.models';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface VideoUrlConfig {
  controls?: '0' | '1';
  autoplay?: '0' | '1';
}

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private apiPrefix = `https://www.googleapis.com/youtube/v3`;

  constructor(private http: HttpClient, private domSanitizer: DomSanitizer) {}

  getVideos(args: YoutubeVideosRequest) {
    const params = new HttpParams({ fromObject: { ...args } })
      .append('part', 'snippet')
      .append('maxResults', `24`)
      .append('key', environment.ytKey);

    return this.http.get<YoutubeVideosResponse>(`${this.apiPrefix}/search`, { params });
  }

  getVideoUrl(id: string, configs: VideoUrlConfig = {}): SafeResourceUrl {
    const params = new HttpParams({ fromObject: { ...configs } });
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}?${params}`);
  }

  getCommentsForVideo(videoId: string): Observable<CommentThreadResponse> {
    const params = new HttpParams()
      .append('videoId', videoId)
      .append('maxResults', `24`)
      .append('part', `snippet,replies`)
      .append('moderationStatus', `published`)
      .append('order', `time`)
      .append('key', environment.ytKey);

    return this.http.get<CommentThreadResponse>(`${this.apiPrefix}/commentThreads`, { params });
  }
}
