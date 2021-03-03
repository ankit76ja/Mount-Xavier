import { Component, DoCheck, OnInit } from '@angular/core';




@Component({
  selector: 'app-all-sections',
  templateUrl: './all-sections.component.html',
  styleUrls: ['./all-sections.component.scss'],
  host: {
    "(window:resize)":"onWindowResize($event)"
  }
})
export class AllSectionsComponent implements OnInit {

  isMobile: boolean = false;
  width:number = window.innerWidth;
  height:number = window.innerHeight;
  mobileWidth:number  = 585;
  slides=[{
    imgPath:'assets/img/slider/1.jpg',
    imgHeader:'Welcome To Mount Xaviers +2 School',
    imgSubHeader:'We Will Help You To Learn',
    content:'At Mount Xavier, we are committed to provide you a best learning experience which is formulated through a series of interesting lectures and co-curricular activities'
  },
  {
    imgPath:'assets/img/slider/2.jpg',
    imgHeader:'Welcome To Mount Xaviers +2 School',
    imgSubHeader:'We Will Help You To Grow',
    content:'At Mount Xavier, we also focus on the personality development and communication skills of the student via Group Discussions, Quizzes and a lot more'
  },
  {
    imgPath:'assets/img/slider/3.jpg',
    imgHeader:'Welcome To Mount Xaviers +2 School',
    imgSubHeader:'We Will Help You To Achieve',
    content:'At Mount Xavier, we will also ensure that you are in the right path for achieving your target through constant monitoring of your to-dos and sets of skiils that you have to ponder upon'
  }]
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  slideConfigCourse = {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  constructor() { }

  ngOnInit() {
    console.log(this.isMobile)
    this.isMobile = this.width < this.mobileWidth;
  }


  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
}

  slickInit(e) { 
    console.log('slick initialized',e);
  }
  
 

}
