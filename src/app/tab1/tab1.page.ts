import { Component } from '@angular/core';
import * as moment from 'moment';

declare let appManager: AppManagerPlugin.AppManager;

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
  public intentList = [
            'https://did.elastos.net/appidcredissue',
            'chat',
            'https://did.elastos.net/credaccess',
            'https://wallet.elastos.net/crmemberregister',
            'https://wallet.elastos.net/crmembervote',
            'https://wallet.elastos.net/didtransaction',
            'https://wallet.elastos.net/dposvotetransaction',
            'https://wallet.elastos.net/elawalletmnemonicaccess',
            'https://wallet.elastos.net/esctransaction',
            'https://wallet.elastos.net/pay',
            'https://wallet.elastos.net/pay ETHSC',
            'https://wallet.elastos.net/pay TTECH',
            'https://wallet.elastos.net/walletaccess',
            'https://did.elastos.net/sethiveprovider',
            'https://did.elastos.net/promptpublishdid'];
  public parames = [
    {appinstancedid: 'did:elastos:iodCjExqz9vNR5mP4uL2rT3VkGKCsMpoKv'}, // wallet
    {toAddress: 'Exxxxxxxxxxx', message: 'hello! nice to meet u'}, // chat
    {claims: {
        email: true,
      }
    }, // credaccess
    {
        did: 'did:elastos:ixxxxxxxx',
        nickName: 'Trinity',
        url: 'trinity-tech.io',
        location: '86'
    }, // crmembervote
    {
        votes: {
            "icS954DGsXXuYJCUbRKiC8JAcoxkaeQVZg":"100000000",
            "ia9akyCKcvwDNGAGxPrMTNVSKZV4f3tcKj":"100000000"
        }
    }, // crmembervote
    {didrequest: '{"header":{"operation":"create","specification":"elastos/did/1.0"},"payload":"eyJpZCI6ImRpZDplbGFzdG9zOmlkYlNVdTk0TXdncjc3NjRmNVZ2c3NESGRLaVplZmlFYTgiLCJwdWJsaWNLZXkiOlt7ImlkIjoiI3ByaW1hcnkiLCJwdWJsaWNLZXlCYXNlNTgiOiIyMUUxaEpXU2hWNGJNYUQyUThzc1FXekxMaTFMeEFTeUpGTVY4RnZmb2dDd1YifV0sImF1dGhlbnRpY2F0aW9uIjpbIiNwcmltYXJ5Il0sInZlcmlmaWFibGVDcmVkZW50aWFsIjpbeyJpZCI6IiNiaXJ0aERhdGUiLCJ0eXBlIjpbIkJhc2ljUHJvZmlsZUNyZWRlbnRpYWwiLCJTZWxmUHJvY2xhaW1lZENyZWRlbnRpYWwiXSwiaXNzdWFuY2VEYXRlIjoiMjAxOS0xMi0yOVQxMDoyMTo1MFoiLCJleHBpcmF0aW9uRGF0ZSI6IjIwMjAtMDEtMTNUMTA6MjE6NTBaIiwiY3JlZGVudGlhbFN1YmplY3QiOnsiYmlydGhEYXRlIjoiMjAxOS0xMi0yOVQxODoyMToxMS42ODkrMDg6MDAifSwicHJvb2YiOnsidmVyaWZpY2F0aW9uTWV0aG9kIjoiI3ByaW1hcnkiLCJzaWduYXR1cmUiOiJGaXZRcTZKeHY4VTRrdldlbEEtQ3NSa05NSkszaWZsaGNWdEZ4ZnVaUGNZdk9JanlXeGtONWw5Y3dNZ1hEcjJuVlY2Z1R6Nnlfa2h6MUl3eVVoWG9IZyJ9fSx7ImlkIjoiI25hbWUiLCJ0eXBlIjpbIkJhc2ljUHJvZmlsZUNyZWRlbnRpYWwiLCJTZWxmUHJvY2xhaW1lZENyZWRlbnRpYWwiXSwiaXNzdWFuY2VEYXRlIjoiMjAxOS0xMi0yOVQxMDoyMTo1MFoiLCJleHBpcmF0aW9uRGF0ZSI6IjIwMjAtMDEtMTNUMTA6MjE6NTBaIiwiY3JlZGVudGlhbFN1YmplY3QiOnsibmFtZSI6IkJlbiJ9LCJwcm9vZiI6eyJ2ZXJpZmljYXRpb25NZXRob2QiOiIjcHJpbWFyeSIsInNpZ25hdHVyZSI6IlpMTl96Y3R2QmZXSDlfaTRSVl9fWnBaMVQ4QWUzQXpDRFdhVWdVZVp2ZFpiWFpCTHZNSGhOWjdSYnRraEtYUkU3cUVDRjRublJoRGVWaWlfc2ttWVdnIn19XSwiZXhwaXJlcyI6IjIwMjQtMTItMjlUMTA6MjE6NDlaIiwicHJvb2YiOnsiY3JlYXRlZCI6IjIwMTktMTItMzBUMDE6MjM6MTZaIiwic2lnbmF0dXJlVmFsdWUiOiItZHU1YjNtUlIxRTV6VEpTbHBzN2p0aDNXSU5TOGN5OS1ta1o2WFhKc3ZjQVpDZVlPdHJNTHNmWjFJY2h5aXhuMGJmVERJQW1lVjVmdjdhUFpCZXhrdyJ9fQ","proof":{"signature":"6zqpTZa_LzBeMty0UfZDfpGUFagmVdwl5iBDJT1mlzK-NJcdhTVOGBdXvQzpZlObIbt06noIXZ_sVVUSTwu63g","type":"ECDSAsecp256r1","verificationMethod":"did:elastos:idbSUu94Mwgr7764f5VvssDHdKiZefiEa8#primary"}}'}, // didtransaction
    {publickeys: [
      '02a7a2fb2e95403b6c3b473b298fb975868d7a39dbffb91181ed4dd8cd85d87edb',
      '03d55285f06683c9e5c6b5892a688affd046940c7161571611ea3a98330f72459f']
    }, // dposvotetransaction
    {}, //elawalletmnemonicaccess
    {
        amount: 0.01,
        payload: 'aaaaaaaaaaaaa'
    }, //esctransaction
    {receiver: 'Exxxxxxxxxxx'}, // pay default
    {receiver: '0x0aD689150EB4a3C541B7a37E6c69c1510BCB27A4', amount: 0.01, memo: 'just test memo', currency: 'ELA/ETHSC'}, // pay ETHSC
    {receiver: '0x8F723ec92F28a87c0A1d28d83210487B1af86e19', amount: 0.01, memo: 'just test memo', currency: 'ELAETHSC:TTECH--'}, // pay ETHSC
    // {elaaddress: {reason: " just test" }}, // walletaccess
    // {elaamount: {reason: " just test" }, elaaddress: {reason: " just test" }}, // walletaccess
    {
        reqfields: {
            elaamount: {reason: " ela amount test" },
            elaaddress: {reason: " ela address test" },
            ethaddress: {reason: " eth address test" }
        }
    }, // walletaccess
    {
        address: "https://192.168.1.1:5000"
    }, // sethiveprovider
    {

    }, // promptpublishdid
  ];

  constructor() {
  }

  selectItem(index) {
    this.index = index;
  }

  sendIntent() {
    console.log('sendIntent parames:',  this.parames[this.index]);
    appManager.sendIntent(this.action.split(' ')[0], this.parames[this.index], {}, (ret) => {
        this.info = JSON.stringify(ret);
        console.log('intent response:', ret);
    },
    (error) => {
        console.log('sendIntent fail:', error);
    });
  }

  getShortIntentName(intentName: string) {
    const lastIndex = intentName.lastIndexOf('/');
    return intentName.substring(lastIndex + 1);
  }
}
