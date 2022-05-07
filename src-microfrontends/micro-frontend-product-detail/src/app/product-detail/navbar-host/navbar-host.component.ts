import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-navbar-host',
  templateUrl: './navbar-host.component.html',
  styleUrls: ['./navbar-host.component.scss']
})
export class NavbarHostComponent implements OnInit {

  constructor(
    private vcr: ViewContainerRef
  ) { }

  async ngOnInit() {
    const { NavbarComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:8000/remoteEntry.js',
      exposedModule: './NavbarComponent',
      type: 'module'
    })
    this.vcr.createComponent(NavbarComponent);
  }

}