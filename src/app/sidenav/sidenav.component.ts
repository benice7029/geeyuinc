import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations:[
      trigger('sidenavbar',[
        state('open',style({
          left: 0,
        })),
        state('close',style({
          left: '-200px'
        })),
        transition('*=>open',animate('200ms')),
        transition('*=>close',animate('300ms'))
      ])
  ]
})
export class SidenavComponent implements OnInit {

  toggleBoolean:string = 'close';

  

  constructor() { }

  ngOnInit() {
  }

  @HostBinding('class.is-open')
  isOpen = false;

  public openAndClose = {
    "IsOpen": this.isOpen

  }

  toggle() {
    this.isOpen = !this.isOpen;
    if(this.isOpen)
      this.toggleBoolean = 'open';
    else
      this.toggleBoolean = 'close';
  }

}
