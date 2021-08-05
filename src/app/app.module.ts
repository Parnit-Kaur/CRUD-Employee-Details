import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailItemComponent,MouseActionDirective } from './components/detail-item/detail-item.component';
import { LoadbuttonComponent } from './components/loadbutton/loadbutton.component';
import { AddDetailsComponent } from './components/add-details/add-details.component';
import { EditDetailsComponent } from './components/edit-details/edit-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { EditbuttonComponent } from './components/editbutton/editbutton.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    DetailsComponent,
    DetailItemComponent,
    LoadbuttonComponent,
    AddDetailsComponent,
    EditDetailsComponent,
    FooterComponent,
    EditbuttonComponent,
    MouseActionDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
