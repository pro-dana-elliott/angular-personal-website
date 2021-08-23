import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VueProjectsComponent } from './vue-projects.component';

describe('VueProjectsComponent', () => {
  let component: VueProjectsComponent;
  let fixture: ComponentFixture<VueProjectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VueProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
