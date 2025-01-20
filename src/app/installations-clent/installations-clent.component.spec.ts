import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationsClentComponent } from './installations-clent.component';

describe('InstallationsClentComponent', () => {
  let component: InstallationsClentComponent;
  let fixture: ComponentFixture<InstallationsClentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstallationsClentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallationsClentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
