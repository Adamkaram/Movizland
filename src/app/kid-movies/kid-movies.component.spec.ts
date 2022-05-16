import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidMoviesComponent } from './kid-movies.component';

describe('KidMoviesComponent', () => {
  let component: KidMoviesComponent;
  let fixture: ComponentFixture<KidMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
