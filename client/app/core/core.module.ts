import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './auth.service';
import { PollsService } from './polls.service';
import { AuthGuardService } from './auth-guard.service';
import { UnauthGuardService } from './unauth-guard.service';
import { CustomHttpService } from './custom-http.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    AuthService,
    PollsService,
    AuthGuardService,
    UnauthGuardService,
    CustomHttpService
  ]
})
export class CoreModule { }
