import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincarrouselComponent } from './maincarrousel.component';

describe('MaincarrouselComponent', () => {
  let component: MaincarrouselComponent;
  let fixture: ComponentFixture<MaincarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaincarrouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaincarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
