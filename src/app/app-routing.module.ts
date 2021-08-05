import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailsComponent } from './components/add-details/add-details.component';
import { DetailsComponent } from './components/details/details.component';
import { EditDetailsComponent } from './components/edit-details/edit-details.component';
import { EditbuttonComponent } from './components/editbutton/editbutton.component';
const appRoutes:Routes=[
  {path: '',component:DetailsComponent,children:[
  { path: 'add', component: AddDetailsComponent },
  { path: 'edit/:id', component: EditDetailsComponent }
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
