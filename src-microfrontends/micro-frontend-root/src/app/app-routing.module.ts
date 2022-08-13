import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation'

const URL = 'http://118.69.111.40:5050/remoteEntry.js'
const authenURL = "http://localhost:2002/remoteEntry.js"
const cartURL = "http://localhost:61400/remoteEntry.js"
const contactURL = "http://localhost:21021/remoteEntry.js"

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
      exposedModule: './CreateProductModule'
    }).then(m => m.CreateProductModule)
  },

  {
    path: 'shopping-cart', loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: cartURL,
      exposedModule: './ShoppingCartModule'
    }).then(m => m.ShoppingCartModule)
  },

  {
    path: 'checkout', loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: cartURL,
      exposedModule: './CheckoutModule'
    }).then(m => m.CheckoutModule)
  },

  {
    path: 'contact', loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: contactURL,
      exposedModule: './ContactModule'
    }).then(m => m.ContactModule)
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
