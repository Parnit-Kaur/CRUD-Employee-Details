import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Angular Project';
  showAddDetail:boolean;
  showDetail:boolean;
  subscription:Subscription;
  subscription2:Subscription;
  constructor(private uiService:UiService,private router: Router) { 
    this.subscription=this.uiService.onToggle().subscribe(value=>this.showAddDetail=value);
    this.subscription2=this.uiService.onToggle2().subscribe(value=>this.showDetail=value);
  }

  ngOnInit(): void {
  }

  toggleAddDetail(){
    this.uiService.toggleAddDetail();
  }
  toggleDetails(){
    this.uiService.toggleDetails();
  }
  hasRoute() {
    //console.log(route);
    return this.router.url.includes('/edit' )||this.router.url.includes('/add' );
  }
  hasRoute2(route:string) {
    //console.log(route);
    return this.router.url===route;
  }
} 
