import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFaculdadeComponent } from './tela-faculdade.component';

describe('TelaFaculdadeComponent', () => {
  let component: TelaFaculdadeComponent;
  let fixture: ComponentFixture<TelaFaculdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaFaculdadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaFaculdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
