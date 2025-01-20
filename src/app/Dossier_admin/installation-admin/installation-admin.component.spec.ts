import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationAdminComponent } from './installation-admin.component';

describe('InstallationAdminComponent', () => {
  let component: InstallationAdminComponent;
  let fixture: ComponentFixture<InstallationAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstallationAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
