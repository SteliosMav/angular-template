import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLayoutRoutingModule } from './home-layout-routing.module';
import { HomeLayoutPage } from './home-layout.page';

@NgModule({
  declarations: [HomeLayoutPage],
  imports: [CommonModule, HomeLayoutRoutingModule],
})
export class HomeLayoutModule {}
