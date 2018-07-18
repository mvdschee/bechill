import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListDetailsPage } from '../list-details/list-details';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  items: Array<{ name: string, activity: string, icon: string, status: boolean, UUID: string}>;
  itemsFalse = [];
  itemsTrue = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [
      {
        name: 'Max',
        activity: 'sports, drinking',
        icon: 'happy',
        status: true,
        UUID: Math.random().toString(36).substring(0)
      },
      {
        name: 'Paul',
        activity: 'poolen, drinking',
        icon: 'happy',
        status: false,
        UUID: Math.random().toString(36).substring(0)
      },
      {
        name: 'Pieter',
        activity: 'hardlopen',
        icon: 'happy',
        status: true,
        UUID: Math.random().toString(36).substring(0)
      }
    ];

    this.items.forEach(item => {
      if (item.status !== true) {
        this.itemsFalse.push(item); 
      } else {
        this.itemsTrue.push(item);     
      }
    });
  }

  itemTapped(event, item) {
    this.navCtrl.push(ListDetailsPage, {item: item});
    console.log(item);
    
    // ListDetailsPage.item = item;
  }
}
