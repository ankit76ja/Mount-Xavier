import { PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { EditEntityComponent } from './components/admin/edit-entity/edit-entity.component';
import { LoginComponent } from './components/admin/login/login.component';
import { AllSectionsComponent } from './components/all-sections/all-sections.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CourseComponent } from './components/course/course.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'', component:HomeComponent,
    children:[
      {path:'',component:AllSectionsComponent,pathMatch:'full'},
      {path:'landing', component:AllSectionsComponent},
      {path:'gallery', component:GalleryComponent},
      {path:'contactus', component:ContactusComponent},
      {path:'course',component:CourseComponent}
    ]},
  {path:'mount-xavier',component:AdminComponent,
    children:[{
      path:'login',component:LoginComponent
    },
    {path:'editEntity',component:EditEntityComponent}]}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
