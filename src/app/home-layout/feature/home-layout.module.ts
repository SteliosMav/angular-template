import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLayoutRoutingModule } from './home-layout-routing.module';
import { HomeLayoutPage } from './home-layout.page';
import { ToolbarModule } from '../ui/toolbar/toolbar.module';
import { SidenavModule } from '../ui/sidenav/sidenav.module';

@NgModule({
  declarations: [HomeLayoutPage],
  imports: [
    CommonModule,
    HomeLayoutRoutingModule,

    // UI
    ToolbarModule,
    SidenavModule,
  ],
})
export class HomeLayoutModule {}
