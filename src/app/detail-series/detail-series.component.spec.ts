import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSeriesComponent } from './detail-series.component';

describe('DetailSeriesComponent', () => {
  let component: DetailSeriesComponent;
  let fixture: ComponentFixture<DetailSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
