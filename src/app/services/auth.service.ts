import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {
  public loginstatus = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
  }

  private serializeObj(obj) {
    const result = [];
    for (const property in obj) {
      result.push(encodeURIComponent(property) + '=' + encodeURIComponent(obj[property]));
    }
    return result.join('&');
  }

  islogin(): any {
    const userLogin = localStorage.getItem('api_key');
    if (userLogin) {
      this.loginstatus.next(true);
    } else {
      this.loginstatus.next(false);
    }

  }

  login(fromData): any {
    // this.loginstatus.next(true);
    // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    // let options = new RequestOptions({ headers: headers});
    let headers = new HttpHeaders(): any ;
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('h2', 'v2');
    // const options = header.append('Content-Type', 'application/x-www-form-urlencoded');
    const body = this.serializeObj(fromData);
    console.log('body', body);
    this.http.post('http://localhost:8000/login', fromData, headers).subscribe(data => {
      console.log('data', data);

    });
    // this.http.get('http://localhost:8000').subscribe(data => {
    //   console.log('data', data);
    // });
  }
}
