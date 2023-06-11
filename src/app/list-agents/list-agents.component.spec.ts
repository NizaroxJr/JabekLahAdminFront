import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAgentsComponent } from './list-agents.component';

describe('ListAgentsComponent', () => {
  let component: ListAgentsComponent;
  let fixture: ComponentFixture<ListAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAgentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
