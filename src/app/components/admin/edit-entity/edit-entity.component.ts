import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CarouselService } from 'src/app/services/carousel.service';
import { DeleteCellRenderer } from 'src/app/shared/delete-cell-renderer.component';
import { EditCellRenderer } from 'src/app/shared/edit-cell-renderer.component';
import { EditPopupModalComponent } from 'src/app/shared/edit-popup-modal/edit-popup-modal.component';

@Component({
  selector: 'app-edit-entity',
  templateUrl: './edit-entity.component.html',
  styleUrls: ['./edit-entity.component.scss']
})
export class EditEntityComponent implements OnInit {
  //Carousel definitions
  carouselDef:any;
  private carouselGridApi;
  carouselListChangedSubscription:Subscription;
  private carouselGridColumnApi;
  carouselData:any;

  constructor(private carouselService:CarouselService,
              private dialog:MatDialog) {
    
   }

  ngOnInit() {
    this.carouselDef = [
      { headerName: 'Image Name', field: 'imgName',resizable:true, width:100 },
      { headerName: 'Header', field: 'imgHeader',resizable:true },
      { headerName: 'Subheader', field: 'imgSubheader',resizable:true },
      { headerName: 'Content', field: 'content',resizable:true },
      { headerName: 'Edit', width:100,  cellRendererFramework: EditCellRenderer
    },
      { headerName: 'Delete', width:100,  cellRendererFramework: DeleteCellRenderer}
    ];

    this.carouselListChangedSubscription = this.carouselService.carouselListChanged.subscribe(res=> {if(res){
      this.getData()
    }})
  }
  onCarouselGridReady(params) {
    this.carouselGridApi = params.api;
    this.carouselGridColumnApi = params.columnApi;
    this.carouselGridApi.sizeColumnsToFit();
    this.getData();
  }
  getData(){
    this.carouselService.getAllCarousel().subscribe(res=> this.carouselData = res['content']);
  }
  addEntity(type:string){
    switch(type){
      case 'carousel':
        this.openDialog('carousel');
      default:
        return;
    }
  }
  openDialog(entityType:string){
      this.dialog.open(EditPopupModalComponent, {
        width: '500px',
        data: {action:'add', entityType:entityType}
      })
  }
  onDestroy(){
    this.carouselListChangedSubscription.unsubscribe();
  }
}
