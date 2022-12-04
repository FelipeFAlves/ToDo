import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPessoalComponent } from './tela-pessoal.component';

describe('TelaPessoalComponent', () => {
  let component: TelaPessoalComponent;
  let fixture: ComponentFixture<TelaPessoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaPessoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaPessoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
