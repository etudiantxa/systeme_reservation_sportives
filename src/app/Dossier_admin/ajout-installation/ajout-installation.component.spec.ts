import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutInstallationComponent } from './ajout-installation.component';

describe('AjoutInstallationComponent', () => {
  let component: AjoutInstallationComponent;
  let fixture: ComponentFixture<AjoutInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutInstallationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
