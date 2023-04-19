import { Injectable } from '@angular/core';
import { IDashboard } from '../interfaces/dashboard.interfaces';
@Injectable({
  providedIn: 'root'
})
export class DataDashboardService {

  constructor() { }
  data: IDashboard = {
    certificate : ['REACT', 'Angular'],
    courses: ['UX/UI', 'REACT', 'Design Thinking', 'Motion', 'Angular']
  }

  getData(): IDashboard {
    return this.data
  }

}
