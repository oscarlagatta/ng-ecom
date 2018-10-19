import { Component, OnInit } from '@angular/core';
import { AuthState } from '../../+state/auth.reducer';
import { Store } from '@ngrx/store';
import * as fromAuthActions from './../../+state/auth.actions';

@Component({
  selector: 'ecom-workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {
  }

  login(){
      this.store.dispatch(new fromAuthActions.LoginAction());
  }
}
