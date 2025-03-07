import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDietryComponent } from './add-dietry.component';

describe('AddDietryComponent', () => {
  let component: AddDietryComponent;
  let fixture: ComponentFixture<AddDietryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDietryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDietryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
