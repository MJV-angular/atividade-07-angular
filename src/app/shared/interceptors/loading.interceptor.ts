import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { finalize } from 'rxjs/operators'
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private activeRequest = 0

  constructor(private loadingServices: LoadingService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.activeRequest == 0) {
      this.loadingServices.show();
    }
    this.activeRequest++
    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequest--
        if (this.activeRequest == 0) {
          this.loadingServices.hide()
        }
      })
    );
  }
}
