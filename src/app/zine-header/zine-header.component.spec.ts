import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZineHeaderComponent } from './zine-header.component';

describe('ZineHeaderComponent', () => {
  let component: ZineHeaderComponent;
  let fixture: ComponentFixture<ZineHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZineHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZineHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
