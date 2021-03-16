import { Component, Inject, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFireStorage, AngularFireUploadTask  } from '@angular/fire/storage';   //   import <<<<
import { CarouselService } from 'src/app/services/carousel.service';
import { carousel } from 'src/app/model/carousel.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { LeaderService } from 'src/app/services/leader.service';
import { leader } from 'src/app/model/leader.model';
import { picture } from 'src/app/model/pictureModel';
import { PictureService } from 'src/app/services/picture.service';


@Component({
  selector: 'app-edit-popup-modal',
  templateUrl: './edit-popup-modal.component.html',
  styleUrls: ['./edit-popup-modal.component.scss']
})
export class EditPopupModalComponent implements OnInit {
  @ViewChildren('entityForm') entityForm;
  carousel:carousel;
  leader:leader;
  picture:picture;
  entity:string;
  task: AngularFireUploadTask;  
  downloadableURL = ''; 
  file:any; 
  carouselId: string;
  leaderId:string;
  pictureId: string;

  action:string;
  pType:any[] = [
    // 'ALL','LAB','CLASSROOM','LIBRARY','CAFE','OTHERS'
    {keyName:'LAB',valueName:'lab'},
    {keyName:'CLASS ROOM',valueName:'class'},
    {keyName:'LIBRARY',valueName:'library'},
    {keyName:'CAFE',valueName:'cafe'},
    {keyName:'OTHERS',valueName:'others'}
  ]

  constructor(
    
    public dialogRef: MatDialogRef<EditPopupModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fireStorage: AngularFireStorage,
    private carouselService:CarouselService,
    private SpinnerService: NgxSpinnerService,
    private _snackBar: MatSnackBar,
    private leaderService:LeaderService,
    private pictureService:PictureService ) {}

    onNoClick(): void {
      this.dialogRef.close();
    }


  ngOnInit() {
    this.SpinnerService.show();
    this.carouselId = this.data['carouselId'];
    this.leaderId = this.data['leaderId'];
    this.pictureId = this.data['pictureId']  
    this.action = this.data.action;
    this.entity = this.data.entityType;
    switch(this.entity){
      case 'carousel':
        this.carouselService.getCarouselById(this.carouselId)
                        .subscribe(car => {
                          this.carousel = car['content'][0];
                          this.SpinnerService.hide();
                        });
      case 'leader':
        this.leaderService.getLeaderById(this.leaderId)
                        .subscribe(car => {
                          this.leader = car['content'][0];
                          this.SpinnerService.hide();
                        });
      case 'picture':
        this.pictureService.getPictureById(this.pictureId)
                        .subscribe(car => {
                          this.picture = car['content'][0];
                          this.SpinnerService.hide();
                        });
    }
    
  }

  async onSubmit(entityForm:NgForm){
    this.uploadFile();
    
    (await this.task).ref.getDownloadURL().then(url => {
      this.downloadableURL = url;
      switch(this.entity){
        case 'carousel':
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
          break;
        case 'leader':
          this.leader = entityForm.value;
          this.leader['leaderImageUrl'] = this.downloadableURL;
          this.leader['imgName'] = this.leader['imgName'].split('\\')[this.leader['imgName'].split('\\').length -1]
          if(this.action === 'edit'){
            this.leader.leaderId = this.leaderId;
            this.leaderService.updateLeader(this.leader).subscribe(data=>{
              console.log('Leader updated successfully');
              this.reset(entityForm);
              this.openSnackBar('Leader updated successfully','Close')
            },
            error=>{
              console.log('Error');
              this.reset(entityForm);
              this.openSnackBar('Error in updating Leader','Close')
            })
          }
          else if(this.action === 'add'){
            this.leader['leaderId'] = Array.from(Array(6), () => Math.floor(Math.random() * 36).toString(36)).join('');
            this.leaderService.addLeader(this.leader).subscribe(data=>{
              console.log('Leader saved successfully');
              this.reset(entityForm);
              this.openSnackBar('Leader saved successfully','Close')
            },
            error=>{
              console.log('Error');
              this.reset(entityForm);
              this.openSnackBar('Error in saving Leader','Close')
            })
          }
          break;
        case 'picture':
          this.picture = entityForm.value;
          this.picture['pictureUrl'] = this.downloadableURL;
          this.picture['pictureName'] = this.picture['pictureName'].split('\\')[this.picture['pictureName'].split('\\').length -1]
          if(this.action === 'edit'){
            this.picture.pictureId = this.pictureId;
            this.pictureService.updatePicture(this.picture).subscribe(data=>{
              console.log('Picture updated successfully');
              this.reset(entityForm);
              this.openSnackBar('Picture updated successfully','Close')
            },
            error=>{
              console.log('Error');
              this.reset(entityForm);
              this.openSnackBar('Error in updating Picture','Close')
            })
          }
          else if(this.action === 'add'){
            this.picture['pictureId'] = Array.from(Array(6), () => Math.floor(Math.random() * 36).toString(36)).join('');
            this.pictureService.addPicture(this.picture).subscribe(data=>{
              console.log('Picture saved successfully');
              this.reset(entityForm);
              this.openSnackBar('Picture saved successfully','Close')
            },
            error=>{
              console.log('Error');
              this.reset(entityForm);
              this.openSnackBar('Error in saving Picture','Close')
            })
          }
          break;
      }
      
    }); 

  }

  onFileChanged(event) {
    this.file = event.target.files[0]; 
  }
  reset(entityForm){
    entityForm.form.reset();
    this.SpinnerService.hide();
    this.onNoClick();
    this.carouselService.carouselListChanged.next(true);
    this.leaderService.leaderListChanged.next(true);
    this.pictureService.pictureListChanged.next(true);
  }

  uploadFile(){
    this.SpinnerService.show()
    const filePath = this.file.name;  // path at which image will be stored in the firebase storage
    this.task =  this.fireStorage.upload(filePath, this.file);    // upload task
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
