import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import{roles,Detail} from '../../Detail'
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { DetailService } from '../../services/detail.service';
@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  showEdit:boolean;
  subscription3:Subscription;
  details:Detail[]=[];
  //@Output() onToggleEdit: EventEmitter<Task> = new EventEmitter();
  @Output() onEditDetail:EventEmitter<Detail>=new EventEmitter();
  @Input()  detail: Detail;
  fname:string;
  mname:string;
  lname:string;
  email:string;
  address:string;
  phno:string;
  role:roles;

  constructor(private uiService:UiService, private DetailService:DetailService) { 
    this.subscription3=this.uiService.onToggle3().subscribe(value=>this.showEdit=value);
  }

  
  ngOnInit(): void {
  }
 // onToggle(detail) {
 //   this.onToggleEdit.emit(detail);
  //}



  onEditSubmit(id){
    if(!this.detail.fname){
     alert('Please add first name');
     return;
    }
    if(!this.detail.role  || !Object.values(roles).includes(this.detail.role)){
      alert('Please add a valid role');
      return;
     }
    if(!this.detail.email){
    alert('Please add an email');
    return;
    }
    this.onEditDetail.emit(this.detail);
    alert("Details edited successfully!!")
    //this.detail=null;
  }
  

  
  


}
 