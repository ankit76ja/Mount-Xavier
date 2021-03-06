import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllSectionsComponent } from './components/all-sections/all-sections.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CourseComponent } from './components/course/course.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/admin/login/login.component';
import {MatIconModule} from '@angular/material/icon';
import { CarouselService } from './services/carousel.service';
import { AdminComponent } from './components/admin/admin.component';
import { EditEntityComponent } from './components/admin/edit-entity/edit-entity.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './shared/dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { EditCellRenderer } from './shared/edit-cell-renderer.component';
import { EditPopupModalComponent } from './shared/edit-popup-modal/edit-popup-modal.component';
import { AngularFireModule } from '@angular/fire';                      // For setup
import { AngularFireDatabaseModule } from '@angular/fire/database';   // For database
import { AngularFirestore } from '@angular/fire/firestore';          // For database --> firestore
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';

import { AngularFireStorageModule } from '@angular/fire/storage';   
import { environment } from 'src/environments/environment';
import { DeleteCellRenderer } from './shared/delete-cell-renderer.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AllSectionsComponent,
    GalleryComponent,
    ContactusComponent,
    CourseComponent,
    LoginComponent,
    AdminComponent,
    EditEntityComponent,
    DialogComponent,
    EditCellRenderer,
    DeleteCellRenderer,
    EditPopupModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule, 
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    FormsModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,                
    AngularFireStorageModule,  
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [CarouselService,NgxSpinnerService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent,EditCellRenderer,EditPopupModalComponent,DeleteCellRenderer],

})
export class AppModule { }
