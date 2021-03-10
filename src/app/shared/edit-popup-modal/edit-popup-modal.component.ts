import { Component, Inject, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFireStorage, AngularFireUploadTask  } from '@angular/fire/storage';   //   import <<<<
import { CarouselService } from 'src/app/services/carousel.service';
import { carousel } from 'src/app/model/carousel.model';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-edit-popup-modal',
  templateUrl: './edit-popup-modal.component.html',
  styleUrls: ['./edit-popup-modal.component.scss']
})
export class EditPopupModalComponent implements OnInit {
  @ViewChildren('entityForm') entityForm;
  carousel:carousel;
  task: AngularFireUploadTask;  
  downloadableURL = ''; 
  file:any; 
  carouselId: any;
  action:string;

  constructor(
    
    public dialogRef: MatDialogRef<EditPopupModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fireStorage: AngularFireStorage,
    private carouselService:CarouselService,
    private SpinnerService: NgxSpinnerService,
    private _snackBar: MatSnackBar ) {}

    onNoClick(): void {
      this.dialogRef.close();
    }


  ngOnInit() {
    this.SpinnerService.show();
    this.carouselId = this.data['carouselId'];   
    this.action = this.data.action;
    this.carouselService.getCarouselById(this.carouselId)
                        .subscribe(car => {
                          this.carousel = car['content'][0];
                          this.SpinnerService.hide();
                        })
  }

  async onSubmit(entityForm:NgForm){
    this.SpinnerService.show()
    console.log(entityForm.value);
    
    
    const filePath = this.file.name;  // path at which image will be stored in the firebase storage
    this.task =  this.fireStorage.upload(filePath, this.file);    // upload task

    // this.progress = this.snapTask.percentageChanges();

    (await this.task).ref.getDownloadURL().then(url => {
      this.downloadableURL = url;
      this.carousel = entityForm.value;
      this.carousel['imgPath'] = this.downloadableURL;
      this.carousel['imgName'] = this.carousel['imgName'].split('\\')[this.carousel['imgName'].split('\\').length -1]
      if(this.action === 'edit'){
        this.carousel.carouselId = this.carouselId;
        this.carouselService.updateCarousel(this.carousel).subscribe(data=>{
          console.log('Carousel updated successfully');
          this.reset(entityForm);
          this.openSnackBar('Carousel updated successfully','Close')
        },
        error=>{
          console.log('Error');
          this.reset(entityForm);
          this.openSnackBar('Error in updating Carousel','Close')
        })
      }
      else if(this.action === 'add'){
        this.carousel['carouselId'] = Array.from(Array(6), () => Math.floor(Math.random() * 36).toString(36)).join('');
        this.carouselService.addCarousel(this.carousel).subscribe(data=>{
          console.log('Carousel saved successfully');
          this.reset(entityForm);
          this.openSnackBar('Carousel saved successfully','Close')
        },
        error=>{
          console.log('Error');
          this.reset(entityForm);
          this.openSnackBar('Error in saving Carousel','Close')
        })
      }
    });  // <<< url is found here

  }

  onFileChanged(event) {
    this.file = event.target.files[0]; 
  }
  reset(entityForm){
    entityForm.form.reset();
    this.SpinnerService.hide();
    this.onNoClick();
    this.carouselService.carouselListChanged.next(true);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
