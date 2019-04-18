import { Component, OnInit, Input } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() sideBar: SidenavComponent;

  @Input('toTop') toTop: boolean;

  appTitle: string = 'GeeyuInc';

  constructor() { }

  ngOnInit() {
  }
  click() {
    this.sideBar.toggle();
  }

}
