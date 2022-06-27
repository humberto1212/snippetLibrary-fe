import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorContentboardComponent } from './error-contentboard.component';

describe('ErrorContentboardComponent', () => {
  let component: ErrorContentboardComponent;
  let fixture: ComponentFixture<ErrorContentboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorContentboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorContentboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
