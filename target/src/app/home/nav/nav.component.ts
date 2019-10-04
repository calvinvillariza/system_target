import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavService } from '@services/nav/nav.service';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  menuData: MenuItem[];

  constructor(private _dataService: NavService) { }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.menuData = this._dataService.getMenuData();
    this.menuData[0].disabled = false;
  }

  menuClick(menu: MenuItem) {
    if (menu.url !== this.menuData.find(menu => (!menu.disabled)).url) {
      this.menuData.find(menu => (!menu.disabled)).disabled = true;
      menu.disabled = false;
    }
  }

}
