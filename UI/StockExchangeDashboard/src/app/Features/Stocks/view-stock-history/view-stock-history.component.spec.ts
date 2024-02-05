import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStockHistoryComponent } from './view-stock-history.component';

describe('ViewStockHistoryComponent', () => {
  let component: ViewStockHistoryComponent;
  let fixture: ComponentFixture<ViewStockHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewStockHistoryComponent]
    });
    fixture = TestBed.createComponent(ViewStockHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
