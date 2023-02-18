import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.css']
})
export class ContentLayoutComponent implements OnInit {

  mouseOverSidebar = false;
  iconSideBar = false;
  showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  isShowMenu(event: boolean) {
    this.showMenu = event;
  }

  showIconSidebar(event: boolean) {
    this.iconSideBar = event;
    this.isMouseLeaveSidebar(null);
  }

  isMouseOverSidebar(event: any) {
    this.mouseOverSidebar = true;
  }

  isMouseLeaveSidebar(event: any) {
    this.mouseOverSidebar = false;
  }
}
