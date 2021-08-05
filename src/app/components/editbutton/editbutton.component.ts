import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Detail } from 'src/app/Detail';

@Component({
  selector: 'app-editbutton',
  templateUrl: './editbutton.component.html',
  styleUrls: ['./editbutton.component.css']
})
export class EditbuttonComponent implements OnInit {
  @Input() text:string;
  //@Input() detail:Detail;
  @Input() color:string;
  @Output() btnClick=new EventEmitter();
  constructor() {
    this.text='';
    this.color='';
   }

  ngOnInit(): void {
  }
  onClick(){
    this.btnClick.emit();
  }
}
