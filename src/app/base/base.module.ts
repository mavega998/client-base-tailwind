import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { IconsModule } from '../icons/icons.module';


@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent,
    ContentLayoutComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    IconsModule
  ]
})
export class BaseModule { }
