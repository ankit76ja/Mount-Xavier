import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  pictures:[];
  filterType:any[] = [{keyName:'LAB',valueName:'lab'},
  {keyName:'CLASS ROOM',valueName:'class'},
  {keyName:'LIBRARY',valueName:'library'},
  {keyName:'CAFE',valueName:'cafe'},
  {keyName:'OTHERS',valueName:'others'}]
  constructor(private picture:PictureService,
    private spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.getAllPictures();
  }
  getPictureByType(pictureType){
    this.picture.getPictureByType(pictureType).subscribe(pictures=>{
      this.pictures = pictures['content'];
      this.spinner.hide();
      console.log(this.pictures);
      },error=>{
        this.spinner.hide();
    })
  }
  getAllPictures(){
    this.spinner.show();
    this.picture.getAllPicture().subscribe(pictures=>{
      this.pictures = pictures['content'];
      this.spinner.hide();
      console.log(this.pictures);
      },error=>{
        this.spinner.hide();
    })
  }

}
