import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
  })
  export class CarouselService {
      
    constructor(private http :HttpClient){
    }
    getAllCarousel(){
        return this.http.get(environment.getCarousel);
    }
  }
