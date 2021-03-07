import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPopupModalComponent } from './edit-popup-modal.component';

describe('EditPopupModalComponent', () => {
  let component: EditPopupModalComponent;
  let fixture: ComponentFixture<EditPopupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPopupModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPopupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
