import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDietryComponent } from './view-dietry.component';

describe('ViewDietryComponent', () => {
  let component: ViewDietryComponent;
  let fixture: ComponentFixture<ViewDietryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewDietryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewDietryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
