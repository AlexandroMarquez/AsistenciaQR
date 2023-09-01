import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-student',
    loadChildren: () => import('./login-student/login-student.module').then( m => m.LoginStudentPageModule)
  },
  {
    path: 'login-profesor',
    loadChildren: () => import('./login-profesor/login-profesor.module').then( m => m.LoginProfesorPageModule)
  },  {
    path: 'main-profesor',
    loadChildren: () => import('./main-profesor/main-profesor.module').then( m => m.MainProfesorPageModule)
  },
  {
    path: 'main-student',
    loadChildren: () => import('./main-student/main-student.module').then( m => m.MainStudentPageModule)
  },
  {
    path: 'registro-profesor',
    loadChildren: () => import('./registro-profesor/registro-profesor.module').then( m => m.RegistroProfesorPageModule)
  },
  {
    path: 'registro-estudiante',
    loadChildren: () => import('./registro-estudiante/registro-estudiante.module').then( m => m.RegistroEstudiantePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
