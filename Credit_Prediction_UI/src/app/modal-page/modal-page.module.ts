import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { ModalPageComponent } from './modal-page.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserModule
  ],
  declarations: [ModalPageComponent]
})
export class ModalPageModule {}

