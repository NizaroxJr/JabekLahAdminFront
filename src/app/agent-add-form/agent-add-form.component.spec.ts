import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAddFormComponent } from './agent-add-form.component';

describe('AgentAddFormComponent', () => {
  let component: AgentAddFormComponent;
  let fixture: ComponentFixture<AgentAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
