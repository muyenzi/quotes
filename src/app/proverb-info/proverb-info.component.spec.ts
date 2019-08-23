import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProverbInfoComponent } from './proverb-info.component';

describe('ProverbInfoComponent', () => {
  let component: ProverbInfoComponent;
  let fixture: ComponentFixture<ProverbInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProverbInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProverbInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
