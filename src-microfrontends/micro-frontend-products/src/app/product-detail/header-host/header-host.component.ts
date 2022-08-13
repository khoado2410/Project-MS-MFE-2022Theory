import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentRef, OnInit, ViewContainerRef } from '@angular/core';
import { LayoutErrorComponent } from 'src/app/handle-error/layout-error/layout-error.component';

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
      remoteEntry: 'http://118.69.111.40:8000/remoteEntry.js',
      exposedModule: './HeaderComponent',
      type: 'module'
    })
      .catch(err => {
        this.vcr.createComponent(LayoutErrorComponent)
      })
    this.vcr.createComponent(HeaderComponent);
  }

}
