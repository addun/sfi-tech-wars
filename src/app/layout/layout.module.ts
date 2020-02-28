import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';

const EXPORTS = [TopBarComponent];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: EXPORTS,
  exports: EXPORTS,
})
export class LayoutModule {}
