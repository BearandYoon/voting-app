import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService,
              private router: Router) { }

  canActivate() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/']);
    }
    return true;
  }

}
