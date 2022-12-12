import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ImagePickersComponent } from './pickers/image-pickers/image-pickers.component';

@NgModule({
    declarations: [ImagePickersComponent],
    imports: [CommonModule, IonicModule],
    exports: [ImagePickersComponent]
})

export class SharedModule {}
