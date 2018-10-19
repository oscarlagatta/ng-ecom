import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { AuthPartialState } from './auth.reducer';
import * as fromAuthActions from './auth.actions';
import { AuthService } from '../services/auth/auth.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  @Effect()
  loadAuth$ = this.dataPersistence.fetch(fromAuthActions.AuthActionTypes.LoginAction, {
    run: (action: fromAuthActions.LoginAction, state: AuthPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      //return new fromAuthActions.LoginActionSuccess([]);
      return this.authService.login().pipe(
        map(user => {
            return new fromAuthActions.LoginActionSuccess(user);
        })
      )
    },

    onError: (action: fromAuthActions.LoginAction, error) => {
      console.error('Error', error);
      return new fromAuthActions.LoginActionFail(error);
    }
  });

  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private dataPersistence: DataPersistence<AuthPartialState>
  ) {}
}
