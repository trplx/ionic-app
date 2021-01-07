import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'operation-list',
        loadChildren: () => import('../operation-list/operation-list.module').then(m => m.OperationListModule)
      },
      {
        path: 'analytics',
        loadChildren: () => import('../analytics/analytics.module').then(m => m.AnalyticsModule)
      },
      {
        path: 'add-operation',
        loadChildren: () => import('../add-operation/add-operation.module').then(m => m.AddOperationModule)
      },
      {
        path: 'dinamics',
        loadChildren: () => import('../dinamics/operation-list.module').then(m => m.OperationListModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: '',
        redirectTo: '/tabs/operation-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/operation-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
