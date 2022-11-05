import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterPage],
  imports: [CommonModule, ReactiveFormsModule, RegisterRoutingModule],
})
export class RegisterModule {}
