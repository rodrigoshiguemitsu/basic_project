import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';






const routes: Routes = [

{ path: 'login', loadChildren: () => import('./screen/login/login.module').then(m => m.LoginModule) },

{ path:'home', loadChildren:()=>import('./screen/home/home.module').then(m=>m.HomeModule)},

{ path: 'register', loadChildren:()=>import('./screen/register/register.module').then(m=>m.RegisterModule) },

{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', redirectTo: '/home' },





 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
