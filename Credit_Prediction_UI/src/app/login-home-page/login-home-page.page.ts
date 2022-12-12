import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoginHomePageService } from './login-home-page.service';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalPageComponent } from '../modal-page/modal-page.component';

@Component({
  selector: 'app-login-home-page',
  templateUrl: './login-home-page.page.html',
  styleUrls: ['./login-home-page.page.scss'],
})
export class LoginHomePagePage implements OnInit {

i: number;

@ViewChild('gender')gender?:ElementRef;
@ViewChild('married')married?:ElementRef
@ViewChild('dependents')dependents?:ElementRef
@ViewChild('education')education?:ElementRef
@ViewChild('employed')employed?:ElementRef
@ViewChild('credit')credit?:ElementRef
@ViewChild('area')area?:ElementRef
@ViewChild('ApplicantIncome')ApplicantIncome?:ElementRef
@ViewChild('CoapplicantIncome')CoapplicantIncome?:ElementRef
@ViewChild('LoanAmount')LoanAmount?:ElementRef
@ViewChild('Loan_Amount_Term')Loan_Amount_Term?:ElementRef

statusMessage:string = '';
isPossible:boolean  = false;
  constructor(private loginService: LoginHomePageService,public modalController: ModalController) { }

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPageComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'statusMessage': this.statusMessage,
        'isPossible':this.isPossible
      }
    });
    return await modal.present();
  }

  async getStatus() {
    this.isPossible = false;
    var data = new FormData();
    data.append('gender',this.gender?.nativeElement.value);
    data.append('married',this.married?.nativeElement.value);
    data.append('dependents',this.dependents?.nativeElement.value);
    data.append('education',this.education?.nativeElement.value);
    data.append('employed',this.employed?.nativeElement.value);
    data.append('credit',this.credit?.nativeElement.value);
    data.append('area',this.area?.nativeElement.value);
    data.append('ApplicantIncome',this.ApplicantIncome?.nativeElement.value);
    data.append('CoapplicantIncome',this.CoapplicantIncome?.nativeElement.value);
    data.append('LoanAmount',this.LoanAmount?.nativeElement.value);
    data.append('Loan_Amount_Term',this.Loan_Amount_Term?.nativeElement.value);
    var status$ = this.loginService.getCreditPredictStatus(data).subscribe((res) => {
      var modal = document.getElementById("resultModal");
        if(res === 'Yes') {
          this.isPossible = true;
          this.statusMessage = "The chance of getting credit is possible"
          this.presentModal();
        } else {
          this.statusMessage = "The chance of getting credit is not possible";
          this.presentModal();
        }
    });
  }

}
