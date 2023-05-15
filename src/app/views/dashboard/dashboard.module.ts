import { NgModule } from '@angular/core';

import {
  CardModule,
  FormModule,
  NavModule
} from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    CardModule,
    NavModule,
    FormModule,
    ChartjsModule,
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
