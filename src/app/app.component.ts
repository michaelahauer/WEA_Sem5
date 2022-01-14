import { Component } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Component({
  selector: 'aaas-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'AaaSWeb';


constructor(private OAuthService: OAuthService) {
  this.configureWithNewConfigApi();
}

private configureWithNewConfigApi() {
  this.OAuthService.configure(authConfig);
  this.OAuthService.tokenValidationHandler = new JwksValidationHandler();
  this.OAuthService.loadDiscoveryDocumentAndTryLogin();
}
}