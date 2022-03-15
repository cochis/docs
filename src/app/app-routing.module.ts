import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'documents',
    loadChildren: () => import('./pages/documents/documents.module').then(m => m.DocumentsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./auth/reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'type-document',
    loadChildren: () => import('./pages/type-document/type-document.module').then( m => m.TypeDocumentPageModule)
  },
  {
    path: 'edit-document',
    loadChildren: () => import('./pages/edit-document/edit-document.module').then( m => m.EditDocumentPageModule)
  },
  {
    path: 'subtype-document',
    loadChildren: () => import('./pages/subtype-document/subtype-document.module').then( m => m.SubtypeDocumentPageModule)
  },
  {
    path: 'find-document',
    loadChildren: () => import('./pages/find-document/find-document.module').then( m => m.FindDocumentPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
