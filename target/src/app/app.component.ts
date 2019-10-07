import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwPush } from '@angular/service-worker';
import { PushnotificationsService } from '@services/pushnotifications/pushnotifications.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Target Cloud';

  private pushSubscription: Subscription;

  constructor(private _router: Router, private _servicePush: SwPush, private _pushService: PushnotificationsService) {
    if (this._servicePush.isEnabled) {
      this._servicePush.requestSubscription({serverPublicKey: VAPID_PUBLIC})
        .then(subs => {
          this._pushService.sendSubscriptionToServer(subs);

          this.initiatePushSubscription();
        }, error => { console.log(error); });
    }
  }

  ngOnInit() {
    this._router.navigate(['home']);
  }

  ngOnDestroy() {
    this.pushSubscription.unsubscribe();
  }

  initiatePushSubscription() {
    this._pushService.pushObserve()
      .subscribe(subs => {
        return subs;
      });
  }
}

const VAPID_PUBLIC = 'BAFFKofyatE4MvRp1hZbKqtLiDRqy61WFaCDjE1BEAeWYAdwsaOIXKJJN3cKnNQWPMVfG-BxFqcDZ5f6iHyv8oE';