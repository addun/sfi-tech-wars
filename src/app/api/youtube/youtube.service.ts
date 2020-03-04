import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeVideosResponse, YoutubeVideosRequest } from './youtube.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private http: HttpClient) {}

  getYoutubeList(args: YoutubeVideosRequest) {
    const params = new HttpParams({ fromObject: { ...args } })
      .append('part', 'snippet')
      .append('maxResults', `24`)
      .append('key', environment.ytKey);

    return this.http.get<YoutubeVideosResponse>(`https://www.googleapis.com/youtube/v3/search`, { params });
  }
}
