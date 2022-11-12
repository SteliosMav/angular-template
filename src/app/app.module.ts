import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AuthEffects } from 'src/app/shared/data-access/auth/+state/auth.effect';
import { authFeature } from 'src/app/shared/data-access/auth/+state/auth.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesModule } from 'src/app/shared/ui/messages/messages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Import once
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    HttpClientModule,

    // UI
    MessagesModule,

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
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
