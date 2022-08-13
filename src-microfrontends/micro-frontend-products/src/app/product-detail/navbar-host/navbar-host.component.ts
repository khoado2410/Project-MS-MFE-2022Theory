import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { LayoutErrorComponent } from 'src/app/handle-error/layout-error/layout-error.component';

@Component({
  selector: 'app-navbar-host',
  templateUrl: './navbar-host.component.html',
  styleUrls: ['./navbar-host.component.scss']
})
export class NavbarHostComponent implements OnInit {

  constructor(
    private vcr: ViewContainerRef
  ) { }

  isLoaded: boolean = false;
  async ngOnInit() {
    const { NavbarComponent } = await loadRemoteModule({
      remoteEntry: 'http://118.69.111.40:8005/remoteEntry.js',
      exposedModule: './NavbarComponent',
      type: 'module'
    })
      .catch(err => {
        this.vcr.createComponent(LayoutErrorComponent)
      })
    this.vcr.createComponent(NavbarComponent);
  }

}