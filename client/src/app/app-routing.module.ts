import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'landing-page', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
