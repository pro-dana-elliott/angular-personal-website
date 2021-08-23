import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AngularProjectsComponent } from './angular-projects.component';

describe('AngularProjectsComponent', () => {
  let component: AngularProjectsComponent;
  let fixture: ComponentFixture<AngularProjectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
