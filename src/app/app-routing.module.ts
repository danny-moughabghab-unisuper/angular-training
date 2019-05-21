import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main/main.layout';
import { HomePageComponent } from './pages/home/home.page';

const routes: Routes = [
  { 
    path: '',
    component: MainLayoutComponent,
    children: [{
      path: '',
      component: HomePageComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
