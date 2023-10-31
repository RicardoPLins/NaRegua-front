import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemSalaoTabelaComponent } from './listagem-salao-tabela.component';

describe('ListagemSalaoTabelaComponent', () => {
  let component: ListagemSalaoTabelaComponent;
  let fixture: ComponentFixture<ListagemSalaoTabelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemSalaoTabelaComponent]
    });
    fixture = TestBed.createComponent(ListagemSalaoTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
