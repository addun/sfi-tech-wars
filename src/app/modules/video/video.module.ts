import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './pages/video/video.component';
import { VideosComponent } from './pages/videos/videos.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { ChannelCardComponent } from './components/channel-card/channel-card.component';
import { PlaylistCardComponent } from './components/playlist-card/playlist-card.component';

@NgModule({
  declarations: [VideoComponent, VideosComponent, VideoCardComponent, ChannelCardComponent, PlaylistCardComponent],
  imports: [CommonModule, VideoRoutingModule],
})
export class VideoModule {}
