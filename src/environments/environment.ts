// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.

import  firebase from "firebase";

// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyB8E43HRMp46hdQNhDwP4lFEso2CeRjAkU",
    authDomain: "mount-xavier-ui-16fd8.firebaseapp.com",
    projectId: "mount-xavier-ui-16fd8",
    storageBucket: "mount-xavier-ui-16fd8.appspot.com",
    messagingSenderId: "378436192370",
    appId: "1:378436192370:web:a5af5d3db9341981989aeb",
    measurementId: "G-F00C8F2WPZ"
  },

  //Carousel
  getCarousel:'http://localhost:3000/getAllCarousel',
  addCarousel: 'http://localhost:3000/addCarousel',
  getCarouselById: 'http://localhost:3000/getCarousel/',
  updateCarousel: 'http://localhost:3000/updateCarousel/',
  deleteCarousel:'http://localhost:3000/deleteCarousel/',

  //Leadership
  getLeader:'http://localhost:3000/getAllLeader',
  addLeader: 'http://localhost:3000/addLeader',
  getLeaderById: 'http://localhost:3000/getLeader/',
  updateLeader: 'http://localhost:3000/updateLeader/',
  deleteLeader:'http://localhost:3000/deleteLeader/',
  

  //Gallery
  getPicture:'http://localhost:3000/getAllPicture',
  addPicture: 'http://localhost:3000/addPicture',
  getPictureById: 'http://localhost:3000/getPicture/',
  updatePicture: 'http://localhost:3000/updatePicture/',
  deletePicture:'http://localhost:3000/deletePicture/',
  getPicturebyType :  'http://localhost:3000/getPicturebyType/',


  login:'http://localhost:3000/login',
  contactus:'http://localhost:3000/contactus',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
