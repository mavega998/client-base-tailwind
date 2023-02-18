import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablerIconsModule } from 'angular-tabler-icons'
import { IconUsers, IconDashboard, IconServerCog, IconLockAccess, IconLogout, IconSquareRoundedChevronLeftFilled, IconSquareRoundedChevronRightFilled } from 'angular-tabler-icons/icons'

const icons = {
  IconUsers,
  IconDashboard,
  IconServerCog,
  IconLockAccess,
  IconLogout,
  IconSquareRoundedChevronLeftFilled,
  IconSquareRoundedChevronRightFilled
}

@NgModule({
  imports: [
    CommonModule,
    TablerIconsModule.pick(icons)
  ],
  exports: [
    TablerIconsModule
  ]
})
export class IconsModule { }
