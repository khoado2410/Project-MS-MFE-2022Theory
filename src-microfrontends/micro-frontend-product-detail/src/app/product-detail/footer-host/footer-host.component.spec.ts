import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHostComponent } from './footer-host.component';

describe('FooterHostComponent', () => {
  let component: FooterHostComponent;
  let fixture: ComponentFixture<FooterHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
