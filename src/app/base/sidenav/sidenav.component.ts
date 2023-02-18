import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  iconSideBar = false;

  @Input() showMenu = false;
  @Input() mouseOverSidebar = false;
  @Output() showIcon = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  showIconSidebar() {
    this.iconSideBar = !this.iconSideBar
    this.showIcon.emit(this.iconSideBar);
  }
}
