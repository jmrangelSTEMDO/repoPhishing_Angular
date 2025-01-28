import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInStemdoComponent } from './log-in-stemdo.component';

describe('LogInStemdoComponent', () => {
  let component: LogInStemdoComponent;
  let fixture: ComponentFixture<LogInStemdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogInStemdoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInStemdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
