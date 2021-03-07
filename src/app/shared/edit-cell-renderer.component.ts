import { Component } from '@angular/core';

import { AgRendererComponent } from 'ag-grid-angular';

@Component({
  selector: 'edit-cell-component',
  template: `<a  style="cursor: pointer;" (click)="editEntity()"><mat-icon>edit</mat-icon></a>`,
})
export class EditCellRenderer implements AgRendererComponent {
  private displayValue: string;

  agInit(params: any): void {
  }
  refresh(params: any): boolean {
    return false;
  }
}