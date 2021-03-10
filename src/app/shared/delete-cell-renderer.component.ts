import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { AgRendererComponent } from 'ag-grid-angular';
import { CarouselService } from '../services/carousel.service';

@Component({
  selector: 'edit-cell-component',
  template: `<a  style="cursor: pointer;" (click)="deleteEntity()"><mat-icon>delete</mat-icon></a>`,
})
export class DeleteCellRenderer implements AgRendererComponent {
  private displayValue: string;
  params:any;


  agInit(params: any): void {
    this.params = params
  }
  constructor(private carouselService:CarouselService,
              private snack:MatSnackBar){

  }
  refresh(params: any): boolean {
    return false;
  }

  deleteEntity(){
    this.carouselService.deleteCarousel(this.params.data.carouselId).subscribe(response=>{
      this.openSnackBar('Carousel deleted successfully','Close');
      this.carouselService.carouselListChanged.next(true);
    },
    err=>{
      this.openSnackBar('Error Deleting Carousel','Close');
      this.carouselService.carouselListChanged.next(true);
    })
  }
  openSnackBar(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 2000,
    });
  }
}