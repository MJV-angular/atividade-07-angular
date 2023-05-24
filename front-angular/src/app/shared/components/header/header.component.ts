import {
  AfterContentInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { LogoutFacadeService } from '../../core/facade/logout-facade.service';
import { UserFacadeService } from '../../core/facade/user-facade.service';
import { gsap } from 'gsap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterContentInit {
  constructor(
    private logout: LogoutFacadeService,
    private userFacade: UserFacadeService,
    private router: Router
  ) {}
  user = this.userFacade.getUser$;

  @ViewChild('nav', { static: true })
  nav!: ElementRef;
  ngAfterContentInit(): void {
    const currentPath = this.router.url;
    if (currentPath == '/home') {
      gsap.set(this.nav.nativeElement, { y: -100 });
      gsap.to(this.nav.nativeElement, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
      });
    }
  }
  onLogout() {
    this.logout.logout();
  }
}
