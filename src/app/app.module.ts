import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/landingPage/app.component';
import { HeaderComponent } from './sharedComponents/header/header.component';
import { SidebarComponent } from './sharedComponents/sidebar/sidebar.component';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
