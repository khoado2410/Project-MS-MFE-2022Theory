import { Component, OnInit } from '@angular/core';
import { Observable } from 'windowed-observable';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const observable = new Observable('mf-root-header');
    observable.publish({nHeader: 'Contact', mfName: 'mf-contact'});
  }

}
