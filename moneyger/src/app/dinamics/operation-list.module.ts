import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OperationListPage } from './operation-list.page';

import { OperationListRoutingModule } from './operation-list-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    OperationListRoutingModule
  ],
  declarations: [OperationListPage]
})
export class OperationListModule {}
