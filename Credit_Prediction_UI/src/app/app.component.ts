import { Component, OnDestroy, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Plugins, Capacitor, AppState} from '@capacitor/core';
import { Router } from '@angular/router';
import { timestamp, take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AuthServiceService } from './auth/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private authSub: Subscription;
  private previousAuthState = false;

verified = false;

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private menuCtrl: MenuController,
    private platform: Platform,
    //private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();

  }



  initializeApp() {
    this.platform.ready().then(() => {
if (Capacitor.isPluginAvailable('SplashScreen')) {
  Plugins.SplashScreen.show();
}
    });
  }

  ngOnInit() {
    this.authSub = this.authService.userIsAuthenticated.subscribe(isAuth => {
      if (!isAuth && this.previousAuthState !== isAuth) {
        this.router.navigateByUrl('/auth');
      }
      this.previousAuthState = isAuth;
    });
    Plugins.App.addListener(
      'appStateChange',
      this.checkAuthOnResume.bind(this)
    );

    }

  ngOnDestroy() {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
    // Plugins.App.removeListener('appStateChange', this.checkAuthOnResume);
  }

  private checkAuthOnResume(state: AppState) {
    if (state.isActive) {
      this.authService
        .autoLogin()
        .pipe(take(1))
        .subscribe(success => {
          if (!success) {
            this.onLogout();
          }
        });
    }
  }

  onAdmissionFee() {
    this.router.navigateByUrl('/login-home-page/admission-fee');
    this.menuCtrl.toggle();
  }

   onNewApplication() {
    this.router.navigateByUrl('/login-home-page/application');
    this.menuCtrl.toggle();
  }

  onViewApplication() {
    this.router.navigateByUrl('/view-application');
    this.menuCtrl.toggle();
  }

  onLogout() {
    this.authService.logout();
    this.menuCtrl.toggle();
    this.router.navigateByUrl('/home');
  }

  onHome() {
    this.router.navigateByUrl('/institute-main-page');
    this.menuCtrl.toggle();
  }

  onMasterDetails() {
    this.router.navigateByUrl('/institute-master-details');
    this.menuCtrl.toggle();
  }

  onTransactions() {
    this.router.navigateByUrl('/institute-transactions');
    this.menuCtrl.toggle();
  }

  onReports() {
    this.router.navigateByUrl('/institute-reports');
    this.menuCtrl.toggle();
  }

  onVerification() {
    this.verified = !this.verified;
    console.log('Recieved');
  }
}
