import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InstallationsClentComponent } from './installations-clent/installations-clent.component';
import { MesReservationsComponent } from './mes-reservations/mes-reservations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutAdminComponent } from './Dossier_admin/layout-admin/layout-admin.component';
import { InstallationAdminComponent } from './Dossier_admin/installation-admin/installation-admin.component';
import { AjoutInstallationComponent } from './Dossier_admin/ajout-installation/ajout-installation.component';
import { ModiffInstallationComponent } from './Dossier_admin/modiff-installation/modiff-installation.component';
import { ReservationComponent } from './Dossier_admin/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    InstallationsClentComponent,
    MesReservationsComponent,
    DashboardComponent,
    LayoutAdminComponent,
    InstallationAdminComponent,
    AjoutInstallationComponent,
    ModiffInstallationComponent,
    ReservationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
