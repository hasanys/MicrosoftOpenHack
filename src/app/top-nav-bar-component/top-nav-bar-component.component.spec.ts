import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavBarComponentComponent } from './top-nav-bar-component.component';

describe('TopNavBarComponentComponent', () => {
  let component: TopNavBarComponentComponent;
  let fixture: ComponentFixture<TopNavBarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavBarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
