import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSnippetComponent } from './error-snippet.component';

describe('ErrorSnippetComponent', () => {
  let component: ErrorSnippetComponent;
  let fixture: ComponentFixture<ErrorSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorSnippetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
