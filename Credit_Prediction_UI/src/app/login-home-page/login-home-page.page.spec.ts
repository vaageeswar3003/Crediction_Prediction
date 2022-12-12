import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginHomePagePage } from './login-home-page.page';

describe('LoginHomePagePage', () => {
  let component: LoginHomePagePage;
  let fixture: ComponentFixture<LoginHomePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginHomePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginHomePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
