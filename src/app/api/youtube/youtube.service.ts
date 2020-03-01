import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeVideos } from './youtube.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private http: HttpClient) {}

  getYoutubeList(args: any = {}) {
    const params = new HttpParams({ fromObject: args })
      .append('part', 'snippet')
      .append('maxResults', `24`)
      .append('key', environment.ytKey);

    return this.http.get<YoutubeVideos>(`https://www.googleapis.com/youtube/v3/search`, { params });
  }
}
