import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesEmpruntComponent } from './mes-emprunt.component';

describe('MesEmpruntComponent', () => {
  let component: MesEmpruntComponent;
  let fixture: ComponentFixture<MesEmpruntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesEmpruntComponent]
    });
    fixture = TestBed.createComponent(MesEmpruntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
