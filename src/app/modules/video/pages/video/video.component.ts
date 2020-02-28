import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'sfi-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
  id$ = this.activatedRoute.params.pipe(
    pluck('id'),
    map(id => this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}`)),
  );

  constructor(private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {}
}
