import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHostComponent } from './header-host.component';

describe('HeaderHostComponent', () => {
  let component: HeaderHostComponent;
  let fixture: ComponentFixture<HeaderHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
