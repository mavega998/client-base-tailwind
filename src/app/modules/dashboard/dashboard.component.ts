import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AdminViewComponent } from './admin-view/admin-view.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardMapping: any = {
    "admin:dashboard": AdminViewComponent
  }
  constructor(
    // private authService: AuthenticationServiceImpl,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnDestroy(): void {
    this.viewContainer.clear();
  }
  ngOnInit() {
    // const dashboardComponent = this.authService.getUserDashboard()[0] ?
      // this.dashboardMapping[this.authService.getUserDashboard()[0]] : DashboardComponent;
    const viewContainerRef = this.viewContainer;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(AdminViewComponent);
  }

}
