import { Action } from '@ngrx/store';
import { Entity } from './auth.reducer';


export enum AuthActionTypes {
  LoginAction = '[Auth] Login',
  LoginActionSuccess = '[Auth] LoginSucess',
  LoginActionFail = '[Auth] LoginFail0',
}

export class LoginAction implements Action {
  readonly type = AuthActionTypes.LoginAction;

}

export class LoginActionSuccess implements Action {
  readonly type = AuthActionTypes.LoginActionSuccess;
  constructor(public payload: any){
  }
}

export class LoginActionFail implements Action {
  readonly type = AuthActionTypes.LoginActionFail;
  constructor(public payload: any){
  }
}

//#region commented code
// export enum AuthActionTypes {
//   LoadAuth = '[Auth] Load Auth',
//   AuthLoaded = '[Auth] Auth Loaded',
//   AuthLoadError = '[Auth] Auth Load Error'
// }

// export class LoadAuth implements Action {
//   readonly type = AuthActionTypes.LoadAuth;
// }

// export class AuthLoadError implements Action {
//   readonly type = AuthActionTypes.AuthLoadError;
//   constructor(public payload: any) {}
// }

// export class AuthLoaded implements Action {
//   readonly type = AuthActionTypes.AuthLoaded;
//   constructor(public payload: Entity[]) {}
// }

//export type AuthAction = LoadAuth | AuthLoaded | AuthLoadError;
//#endregion

export type AuthAction = LoginAction | LoginActionSuccess | LoginActionFail;

export const fromAuthActions = {
  LoginAction,
  LoginActionSuccess,
  LoginActionFail
};
