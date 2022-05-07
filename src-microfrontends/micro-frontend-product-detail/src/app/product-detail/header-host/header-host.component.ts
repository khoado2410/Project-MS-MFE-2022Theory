import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentRef, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-header-host',
  templateUrl: './header-host.component.html',
  styleUrls: ['./header-host.component.scss']
})
export class HeaderHostComponent implements OnInit {
  constructor(
    private vcr: ViewContainerRef
  ) { }

  async ngOnInit() {
    const { HeaderComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:8000/remoteEntry.js',
      exposedModule: './HeaderComponent',
      type: 'module'
    })
    this.vcr.createComponent(HeaderComponent);
  }

}
