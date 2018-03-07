import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class CustomHttpService {

  constructor(private http: HttpClient,
              private router: Router) {}

  makeRequest(url, method, params?, body?) {
    return this.http.request(method, url, {body: body, params: params})
      .map(res => res)
      .catch(error => {
        if (error.status === 401) {
          sessionStorage.removeItem('user');
          this.router.navigate(['/login', {url: this.router.url.slice(1)}]);
          return Observable.throw('User is not logged in');
        }
        console.log(error);
        return Observable.throw(error.error.message || 'An error occurred');
      });
  }

}
