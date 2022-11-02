import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLayoutPage } from './home-layout.page';

describe('HomeLayoutPage', () => {
  let component: HomeLayoutPage;
  let fixture: ComponentFixture<HomeLayoutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLayoutPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
