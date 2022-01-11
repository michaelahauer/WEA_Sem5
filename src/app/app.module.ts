import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetectorListComponent } from './detector-list/detector-list.component';
//import { OAuthModule } from 'angular-oauth2-oidc';
import { HomeComponent } from './home/home.component';
import { MetricsListComponent } from './metrics-list/metrics-list.component';
import { MetricDetailComponent } from './metric-detail/metric-detail.component';
import { LogsListComponent } from './logs-list/logs-list.component';
import { DetectorsFormComponent } from './detectors-form/detectors-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogsItemListComponent } from './logs-item-list/logs-item-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DetectorListComponent,
    HomeComponent,
    MetricsListComponent,
    MetricDetailComponent,
    LogsListComponent,
    DetectorsFormComponent,
    LogsItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
    //OAuthModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
