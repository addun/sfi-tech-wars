import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'sfi-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  @HostBinding('class.navbar')
  @HostBinding('class.navbar-expand-md')
  @HostBinding('class.navbar-dark')
  @HostBinding('class.fixed-top')
  @HostBinding('class.bg-dark')
  hostClasses = true;

  searchForm = new FormGroup({
    q: new FormControl(null, [Validators.required]),
  });

  constructor(private router: Router) {}

  openVideoList(): void {
    this.router.navigate(['/'], { queryParams: this.searchForm.value });
  }
}
