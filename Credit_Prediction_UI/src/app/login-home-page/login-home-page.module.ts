import { ElementRef, NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginHomePagePageRoutingModule } from './login-home-page-routing.module';

import { LoginHomePagePage } from './login-home-page.page';
import { LoginHomePageService } from './login-home-page.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginHomePagePageRoutingModule,
  ],
  declarations: [LoginHomePagePage]
})
export class LoginHomePagePageModule {

  // @ViewChild('gender')gender?:ElementRef;
  // @ViewChild('married')married?:ElementRef
  // @ViewChild('dependents')dependents?:ElementRef
  // @ViewChild('education')education?:ElementRef
  // @ViewChild('employed')employed?:ElementRef
  // @ViewChild('credit')credit?:ElementRef
  // @ViewChild('area')area?:ElementRef
  // @ViewChild('ApplicantIncome')ApplicantIncome?:ElementRef
  // @ViewChild('CoapplicantIncome')CoapplicantIncome?:ElementRef
  // @ViewChild('LoanAmount')LoanAmount?:ElementRef
  // @ViewChild('Loan_Amount_Term')Loan_Amount_Term?:ElementRef

  // statusMessage:string = '';
  // isPossible:boolean  = false;

  // constructor(private service:LoginHomePageService) { }

  // ngOnInit(): void {
  // }

  // async getStatus() {
  //   console.log('test')
  //   this.isPossible = false;
  //   var data = new FormData();
  //   data.append('gender',this.gender?.nativeElement.value);
  //   data.append('married',this.married?.nativeElement.value);
  //   data.append('dependents',this.dependents?.nativeElement.value);
  //   data.append('education',this.education?.nativeElement.value);
  //   data.append('employed',this.employed?.nativeElement.value);
  //   data.append('credit',this.credit?.nativeElement.value);
  //   data.append('area',this.area?.nativeElement.value);
  //   data.append('ApplicantIncome',this.ApplicantIncome?.nativeElement.value);
  //   data.append('CoapplicantIncome',this.CoapplicantIncome?.nativeElement.value);
  //   data.append('LoanAmount',this.LoanAmount?.nativeElement.value);
  //   data.append('Loan_Amount_Term',this.Loan_Amount_Term?.nativeElement.value);
  //   this.service.getCreditPredictStatus(data).subscribe((res) => {
  //     var modal = document.getElementById("resultModal");
  //       if(res === 'Yes') {
  //         this.isPossible = true;
  //         this.statusMessage = "The chance of getting credit is possible"
  //         modal?.click();
  //       } else {
  //         this.statusMessage = "The chance of getting credit is not possible"
  //         modal?.click();
  //       }
  //   })
  }