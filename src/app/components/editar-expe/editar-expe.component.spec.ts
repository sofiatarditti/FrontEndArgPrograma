import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExpeComponent } from './editar-expe.component';

describe('EditarExpeComponent', () => {
  let component: EditarExpeComponent;
  let fixture: ComponentFixture<EditarExpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarExpeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarExpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
