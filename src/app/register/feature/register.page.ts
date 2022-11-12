import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthFacade } from 'src/app/shared/data-access/auth/+state/auth.facade';

@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form = this.fb.group({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  });

  send() {}

  constructor(private fb: FormBuilder, private authFacade: AuthFacade) {}

  ngOnInit(): void {}
}
