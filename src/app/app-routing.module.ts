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
    path: 'info',
    loadChildren: () => import('./info/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'nutz',
    loadChildren: () => import('./info/nutz/nutz.module').then( m => m.NutzPageModule)
  },
  {
    path: 'cam',
    loadChildren: () => import('./info/cam/cam/cam.module').then( m => m.CamPageModule)
  },
  {
    path: 'kontrolle',
    loadChildren: () => import('./info/cam/kontrolle/kontrolle.module').then( m => m.KontrollePageModule)
  },
  {
    path: 'praemie',
    loadChildren: () => import('./info/cam/praemie/praemie.module').then( m => m.PraemiePageModule)
  },
  {
    path: 'aus',
    loadChildren: () => import('./info/aus/aus.module').then( m => m.AusPageModule)
  },
  {
    path: 'park',
    loadChildren: () => import('./info/park/park.module').then( m => m.ParkPageModule)
  },
  {
    path: 'werpr',
    loadChildren: () => import('./info/werpr/werpr.module').then( m => m.WerprPageModule)
  },
  {
    path: 'fahr',
    loadChildren: () => import('./info/fahr/fahr/fahr.module').then( m => m.FahrPageModule)
  },
  {
    path: 'gehalt',
    loadChildren: () => import('./info/fahr/gehalt/gehalt.module').then( m => m.GehaltPageModule)
  },
  {
    path: 'pausch',
    loadChildren: () => import('./info/fahr/pausch/pausch.module').then( m => m.PauschPageModule)
  },
  {
    path: 'ppau',
    loadChildren: () => import('./info/fahr/ppau/ppau.module').then( m => m.PpauPageModule)
  },
  {
    path: 'proz',
    loadChildren: () => import('./info/fahr/proz/proz.module').then( m => m.ProzPageModule)
  },
  {
    path: 'ulist',
    loadChildren: () => import('./unfall/ulist/ulist.module').then( m => m.UlistPageModule)
  },
  {
    path: 'fotos',
    loadChildren: () => import('./unfall/fotos/fotos.module').then( m => m.FotosPageModule)
  },
  {
    path: 'austt',
    loadChildren: () => import('./info/austt/austt.module').then( m => m.AusttPageModule)
  },
  {
    path: 'calls',
    loadChildren: () => import('./calls/calls/calls.module').then( m => m.CallsPageModule)
  },
  {
    path: 'werkstatt',
    loadChildren: () => import('./calls/werkstatt/werkstatt.module').then( m => m.WerkstattPageModule)
  },
  {
    path: 'buchen',
    loadChildren: () => import('./buchen/buchen/buchen.module').then( m => m.BuchenPageModule)
  },
  {
    path: 'b1',
    loadChildren: () => import('./buchen/b1/b1.module').then( m => m.B1PageModule)
  },
  {
    path: 'b2',
    loadChildren: () => import('./buchen/b2/b2.module').then( m => m.B2PageModule)
  },
  {
    path: 'office',
    loadChildren: () => import('./calls/office/office.module').then( m => m.OfficePageModule)
  },
  {
    path: 'tanken',
    loadChildren: () => import('./tanken/tanken/tanken.module').then( m => m.TankenPageModule)
  },
  {
    path: 'diesel',
    loadChildren: () => import('./tanken/diesel/diesel.module').then( m => m.DieselPageModule)
  },
  {
    path: 'strom',
    loadChildren: () => import('./tanken/strom/strom.module').then( m => m.StromPageModule)
  },
  {
    path: 'adblue',
    loadChildren: () => import('./tanken/adblue/adblue.module').then( m => m.AdbluePageModule)
  },
  {
    path: 'falsch',
    loadChildren: () => import('./tanken/falsch/falsch.module').then( m => m.FalschPageModule)
  },
  {
    path: 'regeln',
    loadChildren: () => import('./regeln/regeln.module').then( m => m.RegelnPageModule)
  },
  {
    path: 'panne',
    loadChildren: () => import('./panne/panne.module').then( m => m.PannePageModule)
  },
  {
    path: 'anfahrt',
    loadChildren: () => import('./anfahrt/anfahrt.module').then( m => m.AnfahrtPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
