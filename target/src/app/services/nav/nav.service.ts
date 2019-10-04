import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  getMenuData() : MenuItem[] {
    return menu;
  }

}

const menu : MenuItem[] = [
  {label: 'Push Notification', url: 'pushnotif', disabled: true, icon: 'pi pi-exclamation-circle'},
  {label: 'Weather', url: 'weather', disabled: true, icon: 'pi pi-globe'},
  {label: 'Facebook Post', url: 'facebookapipost', disabled: true, icon: 'pi pi-users'}
]; 
