import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation'

const URL = 'http://localhost:5000/remoteEntry.js'
const authenURL = "http://localhost:2002/remoteEntry.js"

const routes: Routes = [
  {
    path: 'authentication', loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: authenURL,
      exposedModule: './AuthenticationModule'
    }).then(m => m.SignInModule)
  },

  {
    path: '', loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: URL,
      exposedModule: './ProductsModule'
    }).then(m => m.ProductsModule)
  },

  {
    path: 'product-detail', loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: URL,
      exposedModule: './ProductDetailModule'
    }).then(m => m.ProductDetailModule)
  },

  {
    path: 'add-product', loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: URL,
      exposedModule: './AddProductModule'
    }).then(m => m.AddProductModule)
  },

  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
