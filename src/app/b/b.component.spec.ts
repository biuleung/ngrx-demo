import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BComponent } from './b.component';

describe('ProfileComponent', () => {
  let component: BComponent;
  let fixture: ComponentFixture<BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
