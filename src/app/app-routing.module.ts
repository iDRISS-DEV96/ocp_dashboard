import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PredictionComponent} from "./prediction/prediction.component";
import {HistoryComponent} from "./history/history.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  {path: 'data-estimation', component: PredictionComponent},
  {path: 'production-history', component: HistoryComponent},
  {path: '', component: WelcomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
