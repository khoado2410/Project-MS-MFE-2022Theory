import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation'

const URL = 'http://localhost:4201/remoteEntry.js'

const routes: Routes = [
  { path: '', loadChildren: () => loadRemoteModule({
    type: 'module',
    remoteEntry: URL,
    exposedModule: './ProductsModule'
  }).then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
