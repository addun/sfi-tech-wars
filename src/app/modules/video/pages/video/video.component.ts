import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, map, switchMap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeService } from 'src/app/api/youtube/youtube.service';

@Component({
  selector: 'sfi-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
  id$ = this.activatedRoute.params.pipe(
    pluck('id'),
    map((id) => this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}`)),
  );

  commentThread$ = this.activatedRoute.params.pipe(
    pluck('id'),
    switchMap((id) => this.youtubeService.getCommentsForVideo(id)),
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private youtubeService: YoutubeService,
  ) {}
}
