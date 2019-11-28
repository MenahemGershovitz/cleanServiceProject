import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanServiceViewComponent } from './clean-service-view.component';

describe('CleanServiceViewComponent', () => {
  let component: CleanServiceViewComponent;
  let fixture: ComponentFixture<CleanServiceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanServiceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanServiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
