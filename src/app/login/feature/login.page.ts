import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthFacade } from 'src/app/shared/data-access/auth/+state/auth.facade';
import { LoginCredentials } from 'src/app/shared/data-access/auth/auth.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form = this.fb.group({
    email: '',
    password: '',
    rememberMe: false,
  });

  send() {
    const credentials: LoginCredentials = this.form.value;
    this.authFacade.login(credentials);
  }

  constructor(private fb: FormBuilder, private authFacade: AuthFacade) {}

  ngOnInit(): void {}
}
