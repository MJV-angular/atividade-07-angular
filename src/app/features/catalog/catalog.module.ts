import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './page/catalog/catalog.component';
import { CatalogMainComponent } from './components/catalog-main/catalog-main.component';
import { CatalogListComponent } from './components/catalog-list/catalog-list.component';
import { CatalogItemComponent } from './components/catalog-item/catalog-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CatalogRoutingModule } from './catalog-routing.module';

@NgModule({
  declarations: [
    CatalogComponent,
    CatalogMainComponent,
    CatalogListComponent,
    CatalogItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CatalogRoutingModule
  ],
  exports:[
    CatalogComponent,
    CatalogMainComponent
  ]
})

export class CatalogModule {}
