import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements AfterViewInit {

  @ViewChild('gmapElement',{static:true}) gmapElement: ElementRef;
  map: google.maps.Map;
  lat = 25.2541912;
  lng = 86.9779211;
  coordinates =new google.maps.LatLng(this.lat, this.lng);
  
  mapOptions: google.maps.MapOptions = {
    center: new google.maps.LatLng(25.2541912, 86.9779211),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  marker:google.maps.Marker; 
  // = new google.maps.Marker({
  //   position: this.coordinates,
  //   map: this.map
  // });

  constructor() { }

  // ngOnInit() {
  //   var mapProp = {
  //     center: new google.maps.LatLng(25.2541912, 86.9779211),
  //     zoom: 15,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //   console.log(this.gmapElement);
  //   this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  //   var marker = new google.maps.Marker({
  //     position: this.coordinates,
  //     map: this.map,
  //   });
  //   this.marker.setMap(this.map);
  // }
  ngAfterViewInit() {
    this.mapInitializer();
  }
  
  mapInitializer() {
    this.map = new google.maps.Map(this.gmapElement.nativeElement, 
    this.mapOptions);
    this.marker = new google.maps.Marker({
        position: this.coordinates,
        map: this.map
      });
    this.marker.setMap(this.map);
  }
  

}
