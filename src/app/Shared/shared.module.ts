import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dropdowndirective } from './dropdown.directive';

@NgModule({
  declarations: [
    Dropdowndirective
  ],
  exports: [
    CommonModule,
    Dropdowndirective
  ]
})
export class SharedModule {}
