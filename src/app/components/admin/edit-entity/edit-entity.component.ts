import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CarouselService } from 'src/app/services/carousel.service';
import { LeaderService } from 'src/app/services/leader.service';
import { PictureService } from 'src/app/services/picture.service';
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
  leaderDef:any;
  pictureDef:any;

  private carouselGridApi;
  private carouselGridColumnApi;

  private leaderGridApi;
  private leaderGridColumnApi;

  private pictureGridApi;
  private pictureGridColumnApi;

  carouselListChangedSubscription:Subscription;
  leaderListChangedSubscription:Subscription;
  pictureListChangedSubscription:Subscription;


  carouselData:any;
  leaderData:any;
  pictureData:any;

  constructor(private carouselService:CarouselService,
              private leaderService : LeaderService,
              private dialog:MatDialog,
              private pictureService:PictureService) {
    
   }

  ngOnInit() {
    this.carouselDef = [
      { headerName: 'Image Name', field: 'imgName',resizable:true, width:100 },
      { headerName: 'Header', field: 'imgHeader',resizable:true },
      { headerName: 'Subheader', field: 'imgSubheader',resizable:true },
      { headerName: 'Content', field: 'content',resizable:true },
      { headerName: 'Edit', width:100,  cellRendererFramework: EditCellRenderer,cellRendererParams: {entityType:'carousel'}
    },
      { headerName: 'Delete', width:100,  cellRendererFramework: DeleteCellRenderer}
    ];
    this.leaderDef = [
      { headerName: 'Leader Name', field: 'leaderName',resizable:true, width:100 },
      { headerName: 'Designation', field: 'designation',resizable:true },
      { headerName: 'Message', field: 'message',resizable:true },
      { headerName: 'Edit', width:100,  cellRendererFramework: EditCellRenderer,cellRendererParams: {entityType:'leader'}
    },
      { headerName: 'Delete', width:100,  cellRendererFramework: DeleteCellRenderer}
    ];

    this.pictureDef = [
      { headerName: 'Picture Name', field: 'pictureName',resizable:true, width:100 },
      { headerName: 'Title', field: 'pictureTitle',resizable:true },
      { headerName: 'Subtitle', field: 'pictureSubtitle',resizable:true },
      { headerName: 'Picture Type', field: 'pictureType',resizable:true },
      { headerName: 'Edit', width:100,  cellRendererFramework: EditCellRenderer,cellRendererParams: {entityType:'picture'}
    },
      { headerName: 'Delete', width:100,  cellRendererFramework: DeleteCellRenderer}
    ];

    this.carouselListChangedSubscription = this.carouselService.carouselListChanged.subscribe(res=> {if(res){
      this.getData()
    }});
    this.leaderListChangedSubscription = this.leaderService.leaderListChanged.subscribe(res=>{if(res){
      this.getLeaderData();
    }})
    this.leaderListChangedSubscription = this.pictureService.pictureListChanged.subscribe(res=>{if(res){
      this.getPictureData();
    }})
  }
  onCarouselGridReady(params) {
    this.carouselGridApi = params.api;
    this.carouselGridColumnApi = params.columnApi;
    this.carouselGridApi.sizeColumnsToFit();
    this.getData();
  }
  onLeaderGridReady(params) {
    this.leaderGridApi = params.api;
    this.leaderGridColumnApi = params.columnApi;
    this.leaderGridApi.sizeColumnsToFit();
    this.getLeaderData();
  }

  onPictureGridReady(params) {
    this.pictureGridApi = params.api;
    this.pictureGridColumnApi = params.columnApi;
    this.pictureGridApi.sizeColumnsToFit();
    this.getPictureData();
  }
  getData(){
    this.carouselService.getAllCarousel().subscribe(res=> this.carouselData = res['content']);
  }
  getLeaderData(){
    this.leaderService.getAllLeader().subscribe(res => this.leaderData = res['content']);
  }

  getPictureData(){
    this.pictureService.getAllPicture().subscribe(res => this.pictureData = res['content']);
  }
  addEntity(type:string){
    switch(type){
      case 'carousel':
        this.openDialog('carousel');
        break;
      case 'leader':
        this.openDialog('leader');
        break;
      case 'picture':
          this.openDialog('picture');
          break;
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
    this.leaderListChangedSubscription.unsubscribe();
  }
}
