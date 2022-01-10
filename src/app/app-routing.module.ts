import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetectorListComponent } from './detector-list/detector-list.component';
//import { CanNavigateToAdminGuard } from './can-navigate-to-admin.guard';
import { HomeComponent } from './home/home.component';
import { LogsListComponent } from './logs-list/logs-list.component';
import { MetricDetailComponent } from './metric-detail/metric-detail.component';
import { MetricsListComponent } from './metrics-list/metrics-list.component';
import { DetectorsFormComponent } from './detectors-form/detectors-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
   },
   {
    path: 'home',
    component: HomeComponent                   // TO-DO: Homeseite
   },
   {
    path: 'metrics',
    component: MetricsListComponent,           // TO-DO
    //canActivate: [CanNavigateToAdminGuard]
   },
   {
    path: 'metrics/:id',
    component: MetricDetailComponent,      // TO-DO
    //canActivate: [CanNavigateToAdminGuard]
   },
   {
     path: 'logs',
     component: LogsListComponent,            // TO-DO
     //canActivate: [CanNavigateToAdminGuard]
   },
   {
     path:'detectors',
     component: DetectorListComponent,
     //canActivate: [CanNavigateToAdminGuard]
   },
   {
     path: 'detectors/:id',
     component: DetectorsFormComponent,       //TO-DO
     //canActivate: [CanNavigateToAdminGuard]
   },
   {
     path: 'index.html',      //dummy für Manfred STeyr-Server
     redirectTo: 'home',
     pathMatch: 'full'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
