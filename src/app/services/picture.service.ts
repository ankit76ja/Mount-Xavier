import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  pictureListChanged = new Subject<Boolean>()
      
  constructor(private http :HttpClient){
  }
  getAllPicture(){
      return this.http.get(environment.getPicture);
  }
  addPicture(picture){
    return this.http.post(environment.addPicture,picture);
  }

  updatePicture(picture){
    return this.http.put(environment.updatePicture+ picture.pictureId,picture);
  } 

  deletePicture(pictureId){
    return this.http.delete(environment.deletePicture + pictureId)
  }

  getPictureById(pictureId){
    return this.http.get(environment.getPictureById + pictureId)
  }
  
  getPictureByType(pictureType){
    return this.http.get(environment.getPicturebyType + pictureType)
  }
}
