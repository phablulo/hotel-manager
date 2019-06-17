import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPathComponent } from './email-path.component';

describe('EmailPathComponent', () => {
  let component: EmailPathComponent;
  let fixture: ComponentFixture<EmailPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
