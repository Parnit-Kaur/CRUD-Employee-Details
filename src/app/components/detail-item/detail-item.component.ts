import { Component, OnInit,Input,Output,EventEmitter, OnChanges, OnDestroy,Directive,ElementRef,HostListener,} from '@angular/core';
import { Detail } from '../../Detail';
import { faTimes,faEdit } from '@fortawesome/free-solid-svg-icons';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import {DetailService} from '../../services/detail.service'
import { DetailsComponent } from '../details/details.component';
import { Router } from '@angular/router';

@Directive({   
  selector: '[mouseAction]'   
})  
export class MouseActionDirective {  
constructor(private elRef: ElementRef) {   
}  
@HostListener('mouseover') onMouseOver() {  
  this.changeBackgroundColor('#f8e2c0');  
}  
@HostListener('mouseleave') onMouseLeave() {  
  this.changeBackgroundColor('');  
}  

private changeBackgroundColor(color: string) {  
  this.elRef.nativeElement.style.backgroundColor = color;  
}    
}   

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit, OnChanges,OnDestroy {
 // details:Detail[]=[];

  @Input() details: Detail[]=[];

  @Output() onDeleteDetail:EventEmitter<Detail> = new EventEmitter();
  @Output() onEditDetail:EventEmitter<Detail> = new EventEmitter();
  
  faTimes=faTimes;
  faEdit=faEdit;
  showDetail:boolean;
  showEdit:boolean;
  subscription2:Subscription;
  subscription3:Subscription;
  
  constructor(private uiService:UiService, private detailService : DetailService,private router: Router) { 
    this.subscription2=this.uiService.onToggle2().subscribe(value=>this.showDetail=value);
    this.subscription3=this.uiService.onToggle3().subscribe(value=>this.showEdit=value);
    
  }
  ngOnChanges():void{
    this.details.forEach(e=>e.isEdit=false);
  }
  ngOnInit(): void {
    //this.detailService.getDetails().subscribe((details)=>this.details=details);
  }

  onDelete(detail){
    this.onDeleteDetail.emit(detail);
  }
  toggleEdit(i,detail){
    detail.isEdit=!detail.isEdit;
    this.uiService.toggleEdit(i);
    if (detail.isEdit){
      this.onEdit(detail);
    }
  }
  onEdit(detail){
    this.onEditDetail.emit(detail);
  }
  
  ngOnDestroy():void{
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }
  hasRoute(route: string) {
    return this.router.url === route;
  }
}
