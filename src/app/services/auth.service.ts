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
  getpost (): any {
    return this.http.get('http://localhost:8000/get_posts');
  }
  login(fromData): any {
    // const options = {
    //   headers: new HttpHeaders({
    //     'Accept':  'application/json',
    //     'Content-Type':  'application/json'
    //   })
    // };
    // console.log('body', fromData);
    const credentials = this.serializeObj(fromData);
    this.http.post('http://localhost:8000/login', {email: 'admin', password: 'secret'}).subscribe(data => {
      console.log('data', data);
      this.loginstatus.next(true);
    });
    //
    // sample get req
    // this.http.get('http://localhost:8000').subscribe(data => {
    //   console.log('data', data);
    // });
  }
}
