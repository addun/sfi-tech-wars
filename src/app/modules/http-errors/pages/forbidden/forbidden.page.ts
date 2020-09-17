import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './forbidden.page.html',
  styleUrls: ['./forbidden.page.scss'],
})
export class ForbiddenPage {
  error = this.router.getCurrentNavigation().extras.state?.error;

  constructor(private router: Router) {}
}
