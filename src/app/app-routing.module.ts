import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DrinklistComponent } from './drinklist/drinklist.component';
import { User } from './models/user';
import { UserService } from './services/user.service';
import { ViewOrderComponent } from './view-order/view-order.component';

const routes: Routes = [
  { path: 'homepage',component: HomepageComponent },
  { path :'drinklist',component: DrinklistComponent},
  { path : 'vieworder', component: ViewOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
