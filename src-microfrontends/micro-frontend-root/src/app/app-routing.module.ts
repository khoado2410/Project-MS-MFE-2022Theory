import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation'

const URL = 'http://localhost:5000/remoteEntry.js'
const detailURL = "http://localhost:3000/remoteEntry.js"

const routes: Routes = [
  { path: '', loadChildren: () => loadRemoteModule({
    type: 'module',
    remoteEntry: URL,
    exposedModule: './ProductsModule'
  }).then(m => m.ProductsModule) },

  { path: 'product-detail', loadChildren: () => loadRemoteModule({
    type: 'module',
    remoteEntry: detailURL,
    exposedModule: './ProductDetailModule'
  }).then(m => m.ProductDetailModule) },
  
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
