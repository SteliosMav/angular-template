import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { authFeature } from '../shared/data-access/auth/+state/auth.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Import once
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    // NgRx - Store
    StoreModule.forRoot(
      {
        auth: authFeature.reducer,
      },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictActionSerializability: true,
          strictStateSerializability: true,
        },
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.env === 'PRODUCTION',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
