import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddOperationPage } from './add-operation.page';

import { AddOperationRoutingModule } from './add-operation-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AddOperationRoutingModule
  ],
  declarations: [AddOperationPage]
})
export class AddOperationModule {}
