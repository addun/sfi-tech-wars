import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorsRoutingModule } from './http-errors-routing.module';
import { ForbiddenPage } from './pages/forbidden/forbidden.page';
import { HttpErrorCodeI18n } from './components/http-error-code.i18n';

@NgModule({
  declarations: [ForbiddenPage, HttpErrorCodeI18n],
  imports: [CommonModule, HttpErrorsRoutingModule],
})
export class HttpErrorsModule {}
