import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthentificationguardService } from './_helpers/AuthentificationGuardService';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'slides',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'symptoms',
    loadChildren: () => import('./symptoms/symptoms.module').then( m => m.SymptomsPageModule),
    canActivate: [AuthentificationguardService]
  },

  {
    path: 'edit-password/:id',
    loadChildren: () => import('./edit-password/edit-password.module').then( m => m.EditPasswordPageModule),
    canActivate: [AuthentificationguardService]
  },
  {
    path: 'edit-account/:id',
    loadChildren: () => import('./edit-account/edit-account.module').then( m => m.EditAccountPageModule),
    canActivate: [AuthentificationguardService]
  },
  {
    path: 'profil/:id',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule),
    canActivate: [AuthentificationguardService]
  },
  {
    path: 'profil-follower/:id',
    loadChildren: () => import('./profil-follower/profil-follower.module').then( m => m.ProfilFollowerPageModule),
    canActivate: [AuthentificationguardService]
  },
  {
    path: 'reset-code',
    loadChildren: () => import('./reset-code/reset-code.module').then( m => m.ResetCodePageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule),
    canActivate: [AuthentificationguardService]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule),
    canActivate: [AuthentificationguardService]
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule),
    canActivate: [AuthentificationguardService]
  },
  {
    path: 'add-comment',
    loadChildren: () => import('./add-comment/add-comment.module').then( m => m.AddCommentPageModule),
    canActivate: [AuthentificationguardService]
  },
  {
    path: 'comments',
    loadChildren: () => import('./comments/comments.module').then( m => m.CommentsPageModule),
    canActivate: [AuthentificationguardService]
  },
  {
    path: 'delete-comment',
    loadChildren: () => import('./delete-comment/delete-comment.module').then( m => m.DeleteCommentPageModule),
    canActivate: [AuthentificationguardService]
  },
  {
    path: 'add-publication',
    loadChildren: () => import('./add-publication/add-publication.module').then( m => m.AddPublicationPageModule),
    canActivate: [AuthentificationguardService]
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then( m => m.TasksPageModule),
    canActivate: [AuthentificationguardService]
  },
  {
    path: 'slides',
    loadChildren: () => import('./slides/slides.module').then( m => m.SlidesPageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
