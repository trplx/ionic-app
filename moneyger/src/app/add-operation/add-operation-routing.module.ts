import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOperationPage } from './add-operation.page';

const routes: Routes = [
  {
    path: '',
    component: AddOperationPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddOperationRoutingModule {}
