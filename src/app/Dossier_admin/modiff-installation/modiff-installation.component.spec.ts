import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiffInstallationComponent } from './modiff-installation.component';

describe('ModiffInstallationComponent', () => {
  let component: ModiffInstallationComponent;
  let fixture: ComponentFixture<ModiffInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModiffInstallationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModiffInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
