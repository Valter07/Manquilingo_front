import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaResultComponent } from './tema-result.component';

describe('TemaResultComponent', () => {
  let component: TemaResultComponent;
  let fixture: ComponentFixture<TemaResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemaResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
