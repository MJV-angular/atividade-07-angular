import { Component, Input } from '@angular/core';
import { IUserState } from '../../interfaces/user.interfaces';
@Component({
  selector: 'app-picture-perfil',
  templateUrl: './picture-perfil.component.html',
  styleUrls: ['./picture-perfil.component.scss']
})

export class PicturePerfilComponent {
@Input() user: IUserState| undefined;
}
