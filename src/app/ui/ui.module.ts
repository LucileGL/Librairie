import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ui2Component } from './components/ui2/ui2.component';
import { RouterModule } from '@angular/router';
import { Ui3Component } from './components/ui3/ui3.component';


@NgModule({
  declarations: [
    Ui2Component,
    Ui3Component,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    Ui2Component,
    Ui3Component,
  ]
})
export class UiModule { }
