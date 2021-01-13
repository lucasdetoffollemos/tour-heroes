import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';

const routes: Routes = [
  {
    path: 'heroes',
    //loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    component: HeroesComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
