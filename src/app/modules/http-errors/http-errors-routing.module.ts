import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForbiddenPage } from './pages/forbidden/forbidden.page';

const routes: Routes = [
  {
    path: 'forbidden',
    component: ForbiddenPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpErrorsRoutingModule {}
