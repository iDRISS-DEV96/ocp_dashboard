import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgChartsModule} from 'ng2-charts';
import {TemperatureChartComponent} from './temperature-chart/temperature-chart.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatBadgeModule} from '@angular/material/badge';
import {FormsModule} from '@angular/forms';
import {SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {VitesseChartComponent} from './vitesse-chart/vitesse-chart.component';
import {DebitChartComponent} from './debit-chart/debit-chart.component';
import {PertesChartComponent} from './pertes-chart/pertes-chart.component';
import {enableProdMode} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { OcpNavBarComponent } from './ocp-nav-bar/ocp-nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { DashFooterComponent } from './dash-footer/dash-footer.component';
import {MatListModule} from '@angular/material/list';
import { HistoryComponent } from './history/history.component';
import { PredictionComponent } from './prediction/prediction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HPuissanceComponent } from './history/h-puissance/h-puissance.component';
import { HVapeurComponent } from './history/h-vapeur/h-vapeur.component';
import { HPertesComponent } from './history/h-pertes/h-pertes.component';
import { HVitesseComponent } from './history/h-vitesse/h-vitesse.component';

enableProdMode();
const config: SocketIoConfig = {
  url: 'http://localhost:3000', // socket server url;
  options: {

  }
};


@NgModule({
  declarations: [
    AppComponent,
    TemperatureChartComponent,
    VitesseChartComponent,
    DebitChartComponent,
    PertesChartComponent,
    OcpNavBarComponent,
    DashFooterComponent,
    HistoryComponent,
    PredictionComponent,
    DashboardComponent,
    WelcomePageComponent,
    HPuissanceComponent,
    HVapeurComponent,
    HPertesComponent,
    HVitesseComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgChartsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    NgxChartsModule,
    MatSidenavModule,
    FormsModule,
    // SocketIoModule.forRoot(config),
    MatChipsModule,
    MatMenuModule,
    MatDividerModule,
    MatBadgeModule,
    MatCardModule,
    AppRoutingModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
