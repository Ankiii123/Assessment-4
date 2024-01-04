import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoboardComponent } from './twoboard.component';

describe('TwoboardComponent', () => {
  let component: TwoboardComponent;
  let fixture: ComponentFixture<TwoboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwoboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
