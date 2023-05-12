import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrasHabilidadesComponent } from './otras-habilidades.component';

describe('OtrasHabilidadesComponent', () => {
  let component: OtrasHabilidadesComponent;
  let fixture: ComponentFixture<OtrasHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrasHabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtrasHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
