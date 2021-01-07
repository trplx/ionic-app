import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OperationListPage } from './operation-list.page';

import { OperationListRoutingModule } from './operation-list-routing.module';
import { OperationListComponent } from './components/operation-list-component/operation-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    OperationListRoutingModule
  ],
  declarations: [
    OperationListPage,
    OperationListComponent
  ]
})
export class OperationListModule {}
