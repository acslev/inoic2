import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {ReactiveFormsModule} from '@angular/forms';
import {Http} from '@angular/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {Storage} from '@ionic/storage';

import {MyApp} from './app.component';
import {LoginPage} from '../pages/login/login';
import {Page1} from '../pages/page1/page1';
import {Page2} from '../pages/page2/page2';
import {Page3} from '../pages/page3/page3';
import {Page4} from '../pages/page4/page4';
import {RegistrationComponentForm} from "../components/forms/registration.component.form";
import {UserService} from "../providers/user.service";
import {Page4Service} from "../providers/page4.service";

import {propertiesToken, properties} from './properties';


let storage = new Storage();

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: '',
    noJwtError: true,
    globalHeaders: [
      {'Accept': 'application/json'},
      {'Access-Control-Allow-Origin': '*'}
    ],
    tokenGetter: (() => storage.get('id_token')),
  }), http);
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    Page1,
    Page2,
    Page3,
    Page4,
    RegistrationComponentForm
  ],
  imports: [
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    Page1,
    Page2,
    Page3,
    Page4
  ],
  providers: [
    UserService,
    Page4Service,
    {provide: propertiesToken, useValue: properties},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    }
  ]
})
export class AppModule {
}
