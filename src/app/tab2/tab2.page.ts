import { Component } from '@angular/core';

declare let notificationManager;

type NotificationRequest = {
  /** Identification key used to overwrite a previous notification if it has the same key. */
  key: string;
  /** Title to be displayed as the main message on the notification. */
  title: string;
  /** Intent URL emitted when the notification is clicked. */
  url?: string;
  /** Contact DID emitting this notification, in case of a remotely received notification. */
  emitter?: string;
}

/**
* Received notification.
*/
type Notification = NotificationRequest & {
  /** Unique identifier for each notification. */
  notificationId: string;
  /** Identification key used to overwrite a previous notification (for the same app id) if it has the same key. */
  key: string;
  /** Package ID of the sending app. */
  appId: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public key = 'test';
  public title = 'you got a new message!';
  public url = '';
  public emitter = '';

  constructor() {}

  send() {
    let request : NotificationRequest = {
      key: this.key,
      title: this.title,
      url: this.url,
      emitter: this.emitter
    };
    notificationManager.sendNotification(request);
  }
}
