import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController, MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthServiceService, AuthResponseData } from './auth-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
isLoading = false;
isLogin = true;

  // tslint:disable-next-line: max-line-length
  constructor(private menuCtrl: MenuController, private router: Router, private authService: AuthServiceService, private loadingCtrl: LoadingController, private alertController: AlertController) { }


  ngOnInit() {

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

authenticate(email: string, password: string) {
  this.isLoading = true;
  this.loadingCtrl.create({keyboardClose: true , message: 'Loading...'}).then(loadingEl => {
  loadingEl.present();
  let authObs: Observable<AuthResponseData>;
  if (this.isLogin){
authObs = this.authService.onLogin(email, password);
  } else {
    authObs = this.authService.signUp(email, password);
  }
  authObs.subscribe(() => {
    this.isLoading = false;
    loadingEl.dismiss();
    this.router.navigateByUrl('/login-home-page');
}, errRes => {
  loadingEl.dismiss();
  const code = errRes.error.error.message;
  let message: string;
  if (code === 'EMAIL_EXISTS') {
    message = 'This E-Mail already exists';
  } else if (code === 'INVALID_PASSWORD') {
    message = 'Enter a valid password.';
  } else if (code === 'INVALID_EMAIL') {
    message = 'Enter a valid E-Mail.';
  }
  this.showAlert(message);
}
  );
});
}

onLogin(form: NgForm) {
  const email = form.value.email;
  const password = form.value.password;
  if (!form.valid) {
return;
  }
  else {
    this.authenticate(email, password);
    form.reset();
  }
}

private showAlert(message: string) {
  this.alertController.create({header: 'Authentication failed', message: message, buttons: ['Okay']}).then(alertEl => {
    alertEl.present();
  });
}



}
