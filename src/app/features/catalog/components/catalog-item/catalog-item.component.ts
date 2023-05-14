import { Component , EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent {
  @Input() styles: string | undefined;
}
