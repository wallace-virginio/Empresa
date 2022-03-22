import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSupervisorComponent } from './cadastro-supervisor.component';

describe('CadastroSupervisorComponent', () => {
  let component: CadastroSupervisorComponent;
  let fixture: ComponentFixture<CadastroSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
