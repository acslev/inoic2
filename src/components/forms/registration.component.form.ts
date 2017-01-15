import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'registration-component-form',
  templateUrl: 'registration.component.form.html'
})
export class RegistrationComponentForm {

  form;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      lastName: this.formBuilder.control(''),
      userName: this.formBuilder.control(''),
      email: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')
      ])),
      password: this.formBuilder.control('', Validators.compose([
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

  passwordStrongValidator(control) {

    if (control.value.trim().length === 0) {
      return null;
    }


  }

}

