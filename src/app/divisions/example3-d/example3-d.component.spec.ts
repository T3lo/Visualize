import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example3DComponent } from './example3-d.component';

describe('Example3DComponent', () => {
  let component: Example3DComponent;
  let fixture: ComponentFixture<Example3DComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example3DComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
