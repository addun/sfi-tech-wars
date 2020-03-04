import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'videos',
    loadChildren: () => import('./modules/video/video.module').then(f => f.VideoModule),
  },
  {
    path: '**',
    redirectTo: 'videos',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
