import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewZineComponent } from './view-zine.component';

describe('ViewZineComponent', () => {
  let component: ViewZineComponent;
  let fixture: ComponentFixture<ViewZineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewZineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewZineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
