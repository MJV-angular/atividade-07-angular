import { Injectable } from '@angular/core';
import { IDashboard } from '../interfaces/dashboard.interfaces';
@Injectable({
  providedIn: 'root'
})
export class DataDashboardService {

  constructor() { }
  data: IDashboard = {
    certificate : ['REACT', 'Angular'],
    courses: []
  }

  getData(): IDashboard {
    return this.data
  }

}
