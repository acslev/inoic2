import {Component} from '@angular/core';
import {NavController, NavParams, MenuController, AlertController} from 'ionic-angular';
import {UserService} from "../../providers/user.service";
import {FormBuilder, Validators} from "@angular/forms";
import {isUndefined} from "ionic-angular/util/util";
import {Page1} from "../page1/page1";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  form;

  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              public alertCtrl: AlertController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public userService: UserService) {

    this.menuCtrl.swipeEnable(false);
  }

  ngOnInit() {
    this.menuCtrl.swipeEnable(false, this.menuCtrl.getMenus().indexOf(this.menuCtrl.getOpen()).toString());
    this.form = this.formBuilder.group({
      username: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      password: this.formBuilder.control('', Validators.compose([
        Validators.required
      ]))
    });
  }

  ionViewDidLoad() {

  }

  ionViewDidLeave() {
  }

  onSubmit(login) {
    this.userService.login(login)
      .subscribe(res => {
          console.log(res);
          if (!isUndefined(res) && res) {
            this.navCtrl.setRoot(Page1);
          } else {
            let alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: 'Username or password is incorrect, please try again!\n(Try with: admin / admin)',
              buttons: ['OK']
            });
            alert.present();
          }
        },
        error => {
          console.log(error);
          if (!isUndefined(login.username) && !isUndefined(login.password)) {
            if (login.username == 'admin' && login.password == 'admin') {
              this.navCtrl.setRoot(Page1);
            } else {
              let alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Username or password is incorrect, please try again!\n(Try with: admin / admin)',
                buttons: ['OK']
              });
              alert.present();
            }
          } else {

          }
        });
  }

}
