import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaTrabalhoComponent } from './tela-trabalho.component';

describe('TelaTrabalhoComponent', () => {
  let component: TelaTrabalhoComponent;
  let fixture: ComponentFixture<TelaTrabalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaTrabalhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
