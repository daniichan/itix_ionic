import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'aniversarios',
        loadChildren: () => import('../aniversarios/aniversarios.module').then(m => m.AniversariosPageModule)
      },
      {
        path: 'unimed',
        loadChildren: () => import('../unimed/unimed.module').then(m => m.UnimedPageModule)
      },
      {
        path: '',
        redirectTo: '/home/aniversarios',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/aniversarios',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
