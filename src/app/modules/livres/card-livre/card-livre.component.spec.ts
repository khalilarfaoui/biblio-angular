import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLivreComponent } from './card-livre.component';

describe('CardLivreComponent', () => {
  let component: CardLivreComponent;
  let fixture: ComponentFixture<CardLivreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLivreComponent]
    });
    fixture = TestBed.createComponent(CardLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
