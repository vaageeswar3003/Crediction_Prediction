import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss'],
})
export class ModalPageComponent implements OnInit {

  @Input() statusMessage: string;
  @Input() isPossible:boolean;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    if(this.isPossible) {
      document.getElementById("message").style.color = 'green';
    } else {
      document.getElementById("message").style.color = 'red';
    }
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }


}
