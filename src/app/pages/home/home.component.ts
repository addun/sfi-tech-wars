import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { YouTubeService } from '../../api/you-tube/you-tube.service';

@Component({
  selector: 'sfi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  videos$ = this.youTubeService.getRecommendedVideos().pipe(map((response) => response.items));

  constructor(private youTubeService: YouTubeService) {}
}
