import { Injectable } from '@angular/core';

declare let appManager: AppManagerPlugin.AppManager;

@Injectable({
    providedIn: 'root'
})
export class AppService {
    private isReceiveIntentReady = false;

    constructor() {}

    init() {
        console.log('AppmanagerService init');
        appManager.setListener(this.onReceive);
    }

    setIntentListener() {
        if (!this.isReceiveIntentReady) {
            this.isReceiveIntentReady = true;
            appManager.setIntentListener(this.onReceiveIntent);
        }
    }

    launcher() {
        appManager.launcher();
    }

    close() {
        appManager.close();
    }

    onReceive(ret) {
        console.log('AppManager receive message:' + ret.message + '. type: ' + ret.type + '. from: ' + ret.from);
    }

    onReceiveIntent(ret) {
        console.log('Intent receive message:' + ret.action + '. params: ' + ret.params + '. from: ' + ret.fromId);
        console.log(ret);
    }
}
