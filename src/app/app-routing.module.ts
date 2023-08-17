import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule),
  },
  {
    path: "user-form",
    loadChildren: () => import('./pages/user-form/user-form.module').then(m => m.UserFormModule),
  },
  {
    path: "confirmation",
    loadChildren: () => import('./pages/confirmation-page/confirmation-page.module').then(m => m.ConfirmationPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
