import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private oauthService: OAuthService) { }

  login(username: string, password: string): boolean {
    this.oauthService.initCodeFlow();
    return true;
  }

  isLoggedIn() {
    //return sessionStorage.getItem('login');
     //this.oauthService.hasValidAccessToken() &&
      //this.oauthService.hasValidIdToken();
      return this.oauthService.hasValidAccessToken() && this.oauthService.hasValidIdToken
  }

}
