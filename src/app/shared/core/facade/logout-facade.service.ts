import { Injectable } from '@angular/core';
import { CatalogStateService } from '../state/catalog-state.service';
import { DashboardStateService } from '../state/dashboard-state.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class LogoutFacadeService {
  constructor(
    private route: Router,
    private dashboardstate: DashboardStateService,
    private catalogState: CatalogStateService
  ) {}

  
  logout() {
    this.dashboardstate.cleanStateDashboard();
    this.catalogState.cleanCatalog();
    localStorage.clear();
    this.route.navigate(['/home']);
  }
}
