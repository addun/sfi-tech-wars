import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './pages/video/video.component';
import { VideosComponent } from './pages/videos/videos.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { ChannelCardComponent } from './components/channel-card/channel-card.component';

@NgModule({
  declarations: [VideoComponent, VideosComponent, VideoCardComponent, ChannelCardComponent],
  imports: [CommonModule, VideoRoutingModule],
})
export class VideoModule {}
