import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddDetail: boolean=false;
  private subject= new Subject <any>();
  private showDetails: boolean=false;
  private subject2= new Subject <any>();
  private showEdit: boolean=false;
  private subject3= new Subject <any>();

  constructor() { }

  toggleAddDetail():void{
    this.showAddDetail=!this.showAddDetail;
    this.subject.next(this.showAddDetail);
  }
  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
  
  toggleDetails():void{
    this.showDetails=!this.showDetails;
    this.subject2.next(this.showDetails);
  }
  onToggle2():Observable<any>{
    return this.subject2.asObservable();
  }
  toggleEdit(i):void{
    this.showEdit=!this.showEdit;
    this.subject3.next(this.showEdit);
  }
  onToggle3():Observable<any>{
    return this.subject3.asObservable();
  }
}
