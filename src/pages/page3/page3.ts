import {Component, Inject, ErrorHandler} from '@angular/core';
import {NavController, NavParams, MenuController} from 'ionic-angular';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UserService} from "../../providers/user.service";
import {propertiesToken} from "../../app/properties";


/*
 Generated class for the Page3 page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {

  form;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService, @Inject(propertiesToken) public properties,
              @Inject(ErrorHandler) public IonicErrorHandler, public menuCtrl: MenuController) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      forName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      lastName: new FormControl(''),
      userName: new FormControl(''),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
        // Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$')
      ]))
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

  onSubmit(user) {
    console.log(user);
  }

}
