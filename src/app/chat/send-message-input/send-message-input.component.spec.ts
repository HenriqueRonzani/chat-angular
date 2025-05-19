import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageInputComponent } from './send-message-input.component';

describe('SendMessageInputComponent', () => {
  let component: SendMessageInputComponent;
  let fixture: ComponentFixture<SendMessageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendMessageInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendMessageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
