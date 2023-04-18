import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'phone',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'phone',
    pathMatch: 'full'
  },
  {
    path: 'villagers',
    loadChildren: () => import('./pages/villagers/villagers.module').then( m => m.VillagersPageModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./pages/music/music.module').then( m => m.MusicPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
