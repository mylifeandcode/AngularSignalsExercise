import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableItemsComponent } from './available-items.component';

describe('AvailableItemsComponent', () => {
  let component: AvailableItemsComponent;
  let fixture: ComponentFixture<AvailableItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableItemsComponent]
    });
    fixture = TestBed.createComponent(AvailableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
