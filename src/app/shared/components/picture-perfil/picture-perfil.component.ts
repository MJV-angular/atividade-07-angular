import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture-perfil',
  templateUrl: './picture-perfil.component.html',
  styleUrls: ['./picture-perfil.component.scss']
})
export class PicturePerfilComponent {
@Input() picture: string | undefined;
}
