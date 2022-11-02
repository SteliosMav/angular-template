import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { ErrorPage } from './error.page';

@NgModule({
  declarations: [ErrorPage],
  imports: [CommonModule, ErrorRoutingModule],
  exports: [ErrorPage],
})
export class ErrorModule {}
