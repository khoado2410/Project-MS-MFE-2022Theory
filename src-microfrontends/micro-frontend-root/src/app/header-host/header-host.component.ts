import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { LayoutErrorComponent } from 'src/app/handle-error/layout-error/layout-error.component';
import { Observable } from 'windowed-observable'

@Component({
  selector: 'app-header-host',
  templateUrl: './header-host.component.html',
  styleUrls: ['./header-host.component.scss']
})
export class HeaderHostComponent implements OnInit {
  constructor(
    private vcr: ViewContainerRef
  ) { }

  nameHeader = 'Default-Header';
  async ngOnInit() {
    const { HeaderComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:8000/remoteEntry.js',
      exposedModule: './HeaderComponent',
      type: 'module'
    })
      .catch(err => {
        this.vcr.createComponent(LayoutErrorComponent)
      })
    let component = this.vcr.createComponent<any>(HeaderComponent);
    const observable = new Observable('mf-root-header');
    observable.subscribe(obj => {
      component.instance.nameHeader = obj.nHeader;
      if (obj.mfName == 'mf-authentication') {
        var header = document.getElementById('mf-layer-header-id');
        if (header)
          header.style.display = 'none'
      }
      else {
        var header2 = document.getElementById('mf-layer-header-id');
        if (header2)
          header2.style.display = 'block'
      }
    })
  }

}
