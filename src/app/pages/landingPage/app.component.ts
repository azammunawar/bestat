import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLogin= false;
  constructor(private auth: AuthService ) {

  }

  ngOnInit() {
     this.auth.loginstatus.subscribe((login) => {
       this.isLogin = login;
    });
  }

}
