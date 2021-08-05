import { Component, OnInit } from '@angular/core';
import {DetailService} from '../../services/detail.service'
import{Detail} from '../../Detail'
import {DETAILS} from '../../mock-details'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  postId;
  details:Detail[]=[];
  editRecord:Detail;
  constructor(private detailService : DetailService) {}

  ngOnInit(): void {
   this.getRecords();
  }

  getRecords(){
    this.detailService.getDetails().subscribe((details)=>this.details=details);
  }
  deleteDetail(detail:Detail){
    this.detailService
    .deleteDetail(detail)
    .subscribe(
      () => (this.details = this.details.filter((t) => t.id !== detail.id))
    );
  } 

  addDetail(detail:Detail){
    this.detailService.addDetail(detail).subscribe((detail) => this.details.push(detail),err=>console.log(err));
  }
  editDetail(detail:Detail){
    this.detailService.editDetail(detail).subscribe(() =>{
      //const indx=this.details.findIndex(e=> e.id===detail.id)
      //this.details[indx]=detail;
    });
  }
  onEditRecord(detail:Detail){
    this.editRecord=detail;
  }



  //(onEditDetail) ="editDetail($event)"
}

// *ngFor="let detail of details" [detail]="detail" 