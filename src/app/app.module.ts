import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetectorsListComponent } from './detectors-list/detectors-list.component';
import { DetectorListComponent } from './detector-list/detector-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DetectorsListComponent,
    DetectorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
