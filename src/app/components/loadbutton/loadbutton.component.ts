import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loadbutton',
  templateUrl: './loadbutton.component.html',
  styleUrls: ['./loadbutton.component.css']
})
export class LoadbuttonComponent implements OnInit {
   

  @Input() text:string;
  @Input() color:string;
  @Output() btnClick=new EventEmitter();

  constructor() {
    this.text='';
    this.color='';
   }

  ngOnInit(): void {
  }
  
  onClick2(){
    this.btnClick.emit();
  }
}
