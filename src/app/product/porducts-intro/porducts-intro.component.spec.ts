import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorductsIntroComponent } from './porducts-intro.component';

describe('PorductsIntroComponent', () => {
  let component: PorductsIntroComponent;
  let fixture: ComponentFixture<PorductsIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorductsIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorductsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
