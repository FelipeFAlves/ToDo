import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCasaComponent } from './tela-casa.component';

describe('TelaCasaComponent', () => {
  let component: TelaCasaComponent;
  let fixture: ComponentFixture<TelaCasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaCasaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
