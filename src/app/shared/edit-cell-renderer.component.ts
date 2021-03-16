import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AgRendererComponent } from 'ag-grid-angular';
import { EditPopupModalComponent } from './edit-popup-modal/edit-popup-modal.component';

@Component({
  selector: 'edit-cell-component',
  template: `<a  style="cursor: pointer;" (click)="editEntity(params.entityType,params)"><mat-icon>edit</mat-icon></a>`,
})
export class EditCellRenderer implements AgRendererComponent {
  private displayValue: string;
  params:any;
  constructor(private dialog:MatDialog){

  }
  agInit(params: any): void {
    this.params = params;
  }
  refresh(params: any): boolean {
    return false;
  }

  editEntity(entityType:string,params){
    this.dialog.open(EditPopupModalComponent, {
      width: '500px',
      data: {'carouselId':params.data.carouselId, 'leaderId': params.data.leaderId, 'pictureId': params.data.pictureId, action:'edit', entityType:entityType}
    })
  }
}