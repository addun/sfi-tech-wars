import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'videos',
    loadChildren: () => import('./modules/video/video.module').then((f) => f.VideoModule),
  },
  {
    path: 'http-errors',
    loadChildren: () => import('./modules/http-errors/http-errors.module').then((f) => f.HttpErrorsModule),
  },
  {
    path: '**',
    redirectTo: '/videos',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
