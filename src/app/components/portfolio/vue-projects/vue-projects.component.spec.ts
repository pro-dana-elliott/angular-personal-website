import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueProjectsComponent } from './vue-projects.component';

describe('VueProjectsComponent', () => {
  let component: VueProjectsComponent;
  let fixture: ComponentFixture<VueProjectsComponent>;

  beforeEach(async(() => {
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
