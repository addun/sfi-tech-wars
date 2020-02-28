import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';

const EXPORTS = [TopBarComponent];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: EXPORTS,
  exports: EXPORTS,
})
export class LayoutModule {}
