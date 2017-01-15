import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Data} from "../../models/data";
import {Page4Service} from "../../providers/page4.service";

@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html'
})
export class Page4 {

  allData: Data[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: Page4Service) {
    service.getAll().subscribe(res => {
      this.allData = <Data[]>res;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page4Page');
  }

}
