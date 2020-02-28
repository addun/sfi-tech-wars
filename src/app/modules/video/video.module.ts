import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './pages/video/video.component';
import { VideosComponent } from './pages/videos/videos.component';

@NgModule({
  declarations: [VideoComponent, VideosComponent],
  imports: [CommonModule, VideoRoutingModule],
})
export class VideoModule {}
