import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { defer, from, Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.navigateToErrorPage(error).pipe(switchMap(() => throwError(error))),
        ),
      );
  }

  private navigateToErrorPage(response: HttpErrorResponse): Observable<boolean> {
    return defer(() =>
      this.router.navigate(['http-errors', 'forbidden'], {
        state: { error: response.error },
      }),
    );
  }
}
