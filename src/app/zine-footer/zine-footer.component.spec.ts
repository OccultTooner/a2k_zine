import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZineFooterComponent } from './zine-footer.component';

describe('ZineFooterComponent', () => {
  let component: ZineFooterComponent;
  let fixture: ComponentFixture<ZineFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZineFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZineFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
