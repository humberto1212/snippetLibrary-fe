import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentboardComponent } from './contentboard.component';

describe('ContentboardComponent', () => {
  let component: ContentboardComponent;
  let fixture: ComponentFixture<ContentboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
