import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantemSalaoComponent } from './mantem-salao.component';

describe('MantemSalaoComponent', () => {
  let component: MantemSalaoComponent;
  let fixture: ComponentFixture<MantemSalaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantemSalaoComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MantemSalaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
