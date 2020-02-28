import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from './pages/video/video.component';
import { VideosComponent } from './pages/videos/videos.component';

const routes: Routes = [
  {
    path: '',
    component: VideosComponent,
  },
  {
    path: ':id',
    component: VideoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoRoutingModule {}
