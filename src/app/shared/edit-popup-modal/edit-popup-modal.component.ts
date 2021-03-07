import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFireStorage, AngularFireUploadTask  } from '@angular/fire/storage';   //   import <<<<


@Component({
  selector: 'app-edit-popup-modal',
  templateUrl: './edit-popup-modal.component.html',
  styleUrls: ['./edit-popup-modal.component.scss']
})
export class EditPopupModalComponent implements OnInit {

  task: AngularFireUploadTask;  
  downloadableURL = ''; 
  file:any; 

  constructor(
    public dialogRef: MatDialogRef<EditPopupModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fireStorage: AngularFireStorage ) {}

    onNoClick(): void {
      this.dialogRef.close();
    }


  ngOnInit() {
  }

  async onSubmit(entityForm:NgForm){
    console.log(entityForm.value);
    const fPath ='C:/Users/M1054636/Desktop/'
    
    const filePath = fPath + this.file.name;  // path at which image will be stored in the firebase storage
    this.task =  this.fireStorage.upload(filePath, this.file);    // upload task

    // this.progress = this.snapTask.percentageChanges();

    (await this.task).ref.getDownloadURL().then(url => {this.downloadableURL = url; });  // <<< url is found here

  }

  onFileChanged(event) {
    this.file = event.target.files[0]; 
  }

}
