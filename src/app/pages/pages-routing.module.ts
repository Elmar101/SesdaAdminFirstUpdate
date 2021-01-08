import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { DetailsComponent } from './citizen/details/details.component';
import { LoginComponent } from './login/login.component';

 const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent},
  {
    path: 'pages/citizen/list',
    loadChildren:()=>import('./citizen/list/list.module').then(m=>m.ListModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'pages/citizen/details/:id',
    loadChildren:()=>import('./citizen/details/details.module').then(m=>m.DetailsModule),
    canActivate:[AuthGuard]
  },
  {path: '**', redirectTo:'login' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
