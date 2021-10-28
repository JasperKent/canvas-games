import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubblePopComponent } from './bubble-pop.component';

xdescribe('BubblePopComponent', () => {
  let component: BubblePopComponent;
  let fixture: ComponentFixture<BubblePopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BubblePopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BubblePopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
