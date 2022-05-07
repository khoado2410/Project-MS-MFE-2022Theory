import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-footer-host',
  templateUrl: './footer-host.component.html',
  styleUrls: ['./footer-host.component.scss']
})
export class FooterHostComponent implements OnInit {

  constructor(
    private vcr: ViewContainerRef
  ) { }

  async ngOnInit() {
    const { FooterComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:8000/remoteEntry.js',
      exposedModule: './FooterComponent',
      type: 'module'
    })
    this.vcr.createComponent(FooterComponent);
  }

}