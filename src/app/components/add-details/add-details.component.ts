import {  Component, OnInit,Output,EventEmitter } from '@angular/core';
import{roles,Detail} from '../../Detail'
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {
  @Output() onAddDetail:EventEmitter<Detail>=new EventEmitter();
 /* fname:string;
  mname:string;
  lname:string;
  email:string;
  address:string;
  phno:string;
  role:roles;*/
  fname:string;
  mname:string;
  address:string;
  phno:string;
  role:roles;
  lname:string;
  email:string;
  showAddDetail:boolean;
  subscription:Subscription;
  registerForm: FormGroup;
    submitted = false;


  constructor(private uiService:UiService,private formBuilder: FormBuilder) { 
    this.subscription=this.uiService.onToggle().subscribe(value=>this.showAddDetail=value);
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fname: ['', [Validators.required , Validators.minLength(4)]],
      mname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phno: ['', [Validators.required,Validators.pattern("^[0-9]*$"),
      Validators.minLength(10)]],
      role: ['', Validators.required],
      address: ['', Validators.required],
  });
    
  }
  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;
    const newDetail={
      fname:this.fname,
      mname:this.mname,
      lname:this.lname,
      email:this.email,
      phno:this.phno,
      role:this.role,
      address:this.address
    }
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    
    this.onAddDetail.emit(newDetail);
    alert('SUCCESS!!')
    this.fname='';
    this.mname='';
    this.lname='';
    this.email='';
    this.phno='';
    this.role=null;
    this.address='';
    /*
    if(!this.fname){
     alert('Please add first name');
     return;
    }
    if(!this.role || !Object.values(roles).includes(this.role)){
      alert('Please add a valid role');
      return;
     }
    if(!this.email){
    alert('Please add an email');
    return;
    }
    const newDetail={
      fname:this.fname,
      mname:this.mname,
      lname:this.lname,
      email:this.email,
      phno:this.phno,
      role:this.role,
      address:this.address
    }
    this.onAddDetail.emit(newDetail);
    this.fname='';
    this.mname='';
    this.lname='';
    this.email='';
    this.phno='';
    this.role=null;
    this.address='';
    */
  }

}
