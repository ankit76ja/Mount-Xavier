import { Component } from '@angular/core';

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
  constructor(private carouselService:CarouselService){

  }
  refresh(params: any): boolean {
    return false;
  }

  deleteEntity(){
    this.carouselService.deleteCarousel(this.params.data.carouselId).subscribe(response=>{
      console.log('Deleted successfully')
    })
  }
}