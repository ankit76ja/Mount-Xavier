import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
  })
  export class CarouselService {

    carouselListChanged = new Subject<Boolean>()
      
    constructor(private http :HttpClient){
    }
    getAllCarousel(){
        return this.http.get(environment.getCarousel);
    }
    addCarousel(carousel){
      return this.http.post(environment.addCarousel,carousel);
    }

    updateCarousel(carousel){
      return this.http.put(environment.updateCarousel+ carousel.carouselId,carousel);
    } 
    deleteCarousel(carouselId){
      return this.http.delete(environment.deleteCarousel + carouselId)
    }
    getCarouselById(carouselId){
      return this.http.get(environment.getCarouselById + carouselId)
    }
  }
