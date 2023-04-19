import { Component, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/shared/interfaces/api.interfaces';
import { DataDashboardService } from 'src/app/shared/services/data-dashboard.service';
import { DataHomeService } from 'src/app/shared/services/data-home.service';
import { IDashboard } from 'src/app/shared/interfaces/dashboard.interfaces';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit  {
  user?: UserResponse;
  data?: IDashboard;
  constructor(private dataDash: DataDashboardService ){}
  ngOnInit(): void {
    this.data = this.dataDash.getData()
    const userSession = localStorage.getItem('@USER');
    if(userSession){
      this.user = JSON.parse(userSession)
    }
  }
}
