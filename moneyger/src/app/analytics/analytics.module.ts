import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnalyticsPage } from './analytics.page';

import { AnalyticsRoutingModule } from './analytics-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AnalyticsPage }]),
    AnalyticsRoutingModule,
  ],
  declarations: [AnalyticsPage]
})
export class AnalyticsModule {}
