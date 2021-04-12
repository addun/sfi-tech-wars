import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sfi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  form = new FormGroup({
    q: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  search() {
    this.router.navigate(['/', 'search'], {
      queryParams: this.form.value,
      relativeTo: this.activatedRoute,
    });
  }
}
