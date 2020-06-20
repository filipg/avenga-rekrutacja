import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowInTvComponent } from './now-in-tv.component';

describe('NowInTvComponent', () => {
  let component: NowInTvComponent;
  let fixture: ComponentFixture<NowInTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowInTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowInTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
