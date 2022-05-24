import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YamsPageComponent } from './yams-page.component';

describe('YamsPageComponent', () => {
  let component: YamsPageComponent;
  let fixture: ComponentFixture<YamsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YamsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YamsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
