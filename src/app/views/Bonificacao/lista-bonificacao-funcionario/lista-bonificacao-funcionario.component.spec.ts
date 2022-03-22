import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBonificacaoFuncionarioComponent } from './lista-bonificacao-funcionario.component';

describe('ListaBonificacaoFuncionarioComponent', () => {
  let component: ListaBonificacaoFuncionarioComponent;
  let fixture: ComponentFixture<ListaBonificacaoFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBonificacaoFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBonificacaoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
