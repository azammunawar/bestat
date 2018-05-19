import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {
  public loginstatus = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
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
    return this.http.post('http://localhost:8000/login', fromData).toPromise().then(data => {
      return data;
    });

  }
  createPost (postData) {
    console.log('fromData', postData);
    return this.http.post('http://localhost:8000/create-post', postData).toPromise().then((data) => {
      console.log('data', data);
    })
  }
}
