import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllSectionsComponent } from './components/all-sections/all-sections.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'', component:HomeComponent,
    children:[
      {path:'landing', component:AllSectionsComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
