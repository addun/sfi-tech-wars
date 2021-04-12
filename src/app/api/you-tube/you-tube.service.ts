import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { YouTubeVideosRequest, YouTubeVideosResponse } from './you-tube.models';

@Injectable({
  providedIn: 'root',
})
export class YouTubeService {
  private key = `AIzaSyDlA6e6wzQ2IHGemi4nzexzQXB6kaeuhro`;
  private apiPrefix = `https://www.googleapis.com/youtube/v3`;

  constructor(private http: HttpClient) {}

  getVideos(args: YouTubeVideosRequest = {}): Observable<YouTubeVideosResponse> {
    const params = new HttpParams({
      fromObject: {
        ...args,
        part: 'snippet',
        maxResults: `24`,
        type: 'video',
        key: this.key,
      },
    });
    return this.http.get<YouTubeVideosResponse>(`${this.apiPrefix}/search`, { params });
  }
}
