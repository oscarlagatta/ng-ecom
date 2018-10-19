import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AUTH_FEATURE_KEY, initialState as authInitialState, authReducer } from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { LoginComponent } from './containers/login/login.component';
import { AuthService } from './services/auth/auth.service';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
       { path: '', component: LoginComponent },
    ]),

    StoreModule.forFeature(AUTH_FEATURE_KEY, authReducer, { initialState: authInitialState }),

    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [AuthEffects, AuthService],
  declarations: [LoginComponent, LoginFormComponent]
})
export class SharedAuthModule {}
