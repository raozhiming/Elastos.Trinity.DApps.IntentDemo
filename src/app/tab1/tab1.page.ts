import { Component } from '@angular/core';

import { AppService } from '../services/appManager';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public index: number;
  public info: string;
  public response: string;
  public action: string;
  public intentList = ['chat', 'credaccess', 'didtransaction', 'dposvotetransaction', 'pay'];
  public parames = [
    {toAddress: 'Exxxxxxxxxxx', message: 'hello! nice to meet u'}, // chat
    {claims: [{
        email: true,
      }]
    }, // credaccess
    {didrequest: 'did payload'}, // didtransaction
    {publicKeys: [
      '02a7a2fb2e95403b6c3b473b298fb975868d7a39dbffb91181ed4dd8cd85d87edb',
      '03d55285f06683c9e5c6b5892a688affd046940c7161571611ea3a98330f72459f']
    }, // dposvotetransaction
    {toAddress: 'Exxxxxxxxxxx', amount: 100, memo: 'just test momo'}, // pay
  ];

  constructor(private appManager: AppService) {}

  selectItem(index) {
    this.index = index;
  }

  sendIntent() {
    console.log('sendIntent');
    this.appManager.sendIntent(this.action, this.parames[this.index], (ret) => {
      this.info = JSON.stringify(ret);
    });
  }
}
