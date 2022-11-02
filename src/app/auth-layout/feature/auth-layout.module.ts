import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLayoutRoutingModule } from './auth-layout-routing.module';
import { AuthLayoutPage } from './auth-layout.page';

@NgModule({
  declarations: [AuthLayoutPage],
  imports: [CommonModule, AuthLayoutRoutingModule],
})
export class AuthLayoutModule {}
