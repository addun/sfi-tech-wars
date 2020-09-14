import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeVideosResponse, YoutubeVideosRequest } from './youtube.models';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CommentThreadResponse } from './comment-thread.models';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private apiPrefix = `https://www.googleapis.com/youtube/v3`;

  constructor(private http: HttpClient) {}

  getVideos(args: YoutubeVideosRequest) {
    const params = new HttpParams({ fromObject: { ...args } })
      .append('part', 'snippet')
      .append('maxResults', `24`)
      .append('key', environment.ytKey);

    return this.http.get<YoutubeVideosResponse>(`${this.apiPrefix}/search`, { params });
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
