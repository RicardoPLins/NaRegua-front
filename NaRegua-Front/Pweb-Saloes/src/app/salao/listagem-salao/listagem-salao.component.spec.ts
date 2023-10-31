import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemSalaoComponent } from './listagem-salao.component';

describe('ListagemSalaoComponent', () => {
  let component: ListagemSalaoComponent;
  let fixture: ComponentFixture<ListagemSalaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemSalaoComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListagemSalaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
