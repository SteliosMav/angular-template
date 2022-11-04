import { Component, OnInit } from '@angular/core';
import { AuthFacade } from 'src/app/shared/data-access/auth/auth.facade';

@Component({
  templateUrl: './home-layout.page.html',
  styleUrls: ['./home-layout.page.scss'],
})
export class HomeLayoutPage implements OnInit {
  onLogout() {
    this.authFacade.logout();
  }

  constructor(private authFacade: AuthFacade) {}

  ngOnInit(): void {}
}
