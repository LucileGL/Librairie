import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ui2Component } from './components/ui2/ui2.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    Ui2Component
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    Ui2Component
  ]
})
export class UiModule { }
