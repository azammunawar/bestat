import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public posts;
  constructor(private http: AuthService) { }

  ngOnInit() {
    this.http.getpost().subscribe(posts => {
      this.posts = posts;
    });
  }

}
