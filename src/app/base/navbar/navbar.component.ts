import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showMenu = false;
  showUserMenu = false;
  title = 'Cliente Base';

  @Output() menu = new EventEmitter();

  @Output() OpenSidenav: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  isShowMenu() {
    this.showMenu = !this.showMenu;
    this.menu.emit(this.showMenu);
  }
}
