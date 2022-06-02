import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderHostComponent } from './header-host/header-host.component';
import { NavbarHostComponent } from './navbar-host/navbar-host.component';
import { FooterHostComponent } from './footer-host/footer-host.component';
import { HandleErrorModule } from './handle-error/handle-error.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderHostComponent,
    NavbarHostComponent,
    FooterHostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HandleErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
