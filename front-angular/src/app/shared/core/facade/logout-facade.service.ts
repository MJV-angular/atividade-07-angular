import { Injectable } from '@angular/core';
import { CatalogStateService } from '../state/catalog-state.service';
import { DashboardStateService } from '../state/dashboard-state.service';
import { Router } from '@angular/router';
import { UserStateService } from '../state/user-state.service';
@Injectable({
  providedIn: 'root',
})
export class LogoutFacadeService {
  constructor(
    private route: Router,
    private dashboardstate: DashboardStateService,
    private catalogState: CatalogStateService,
    private userState: UserStateService
  ) {}


  logout() {
    localStorage.clear();
    this.dashboardstate.cleanStateDashboard();
    this.catalogState.cleanCatalog();
    this.userState.cleanStateUser();
    localStorage.clear();
    this.route.navigate(['/home']);
  }
}
