import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMoviesComponent } from './detail-movies.component';

describe('DetailMoviesComponent', () => {
  let component: DetailMoviesComponent;
  let fixture: ComponentFixture<DetailMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
