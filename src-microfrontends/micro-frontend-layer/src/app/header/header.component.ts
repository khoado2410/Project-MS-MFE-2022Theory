import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'windowed-observable'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('nameHeader') nameHeader = 'Default-Header' 
  constructor() { }

  ngOnInit(): void {

  }

}
