import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sfi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  search() {
    this.router.navigate(['/', 'search'], {
      relativeTo: this.activatedRoute,
    });
  }
}
