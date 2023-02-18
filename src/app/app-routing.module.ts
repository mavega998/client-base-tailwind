import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'main',
    // canActivateChild: [AuthGuard],
    runGuardsAndResolvers: 'always',
    loadChildren: () => import('./base/base.module').then((m) => m.BaseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
