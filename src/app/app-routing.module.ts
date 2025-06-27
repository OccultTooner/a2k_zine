import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ViewZineComponent } from './view-zine/view-zine.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'view/:id', component: ViewZineComponent},
  { path: '**', component: MainPageComponent, redirectTo:'', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
      useHash: true, //fixing
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
