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
  },
  {
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
  {
    path: 'recuperar-cuenta-estudiante',
    loadChildren: () => import('./recuperar-cuenta-estudiante/recuperar-cuenta-estudiante.module').then( m => m.RecuperarCuentaEstudiantePageModule)
  },
  {
    path: 'recuperar-cuenta-profesor',
    loadChildren: () => import('./recuperar-cuenta-profesor/recuperar-cuenta-profesor.module').then( m => m.RecuperarCuentaProfesorPageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)  
  },
  {
    path: 'homere',
    loadChildren: () => import('./homere/homere.module').then( m => m.HomerePageModule)
  },
  {
    path: 'recuperar-cuenta-code',
    loadChildren: () => import('./recuperar-cuenta-code/recuperar-cuenta-code.module').then( m => m.RecuperarCuentaCodePageModule)
  },  {
    path: 'recuperar-cuenta-code2',
    loadChildren: () => import('./recuperar-cuenta-code2/recuperar-cuenta-code2.module').then( m => m.RecuperarCuentaCode2PageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
