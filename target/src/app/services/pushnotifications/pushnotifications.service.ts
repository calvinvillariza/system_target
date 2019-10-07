import { Injectable } from '@angular/core';
import { ApiService } from '@services/api.service';
import { environment } from 'environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PushnotificationsService {

  pushObservable: Subject<any>; 

  constructor(private _apiService: ApiService) { }

  sendSubscriptionToServer(subscription: PushSubscription) {
    this._apiService.post(`${environment.apiurl}`, subscription)
      .then(subs => {
        this.pushObservable.next(subs);
      });
  }

  pushObserve() : Observable<any> {
    return this.pushObservable.asObservable();
  }
}
