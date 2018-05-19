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
import { HomePageComponent } from './home-page/home-page.component';
import { PostFilterPipe } from './post-filter.pipe';
import { PostFilter2Pipe } from './post-filter-2.pipe';
import { PostFilter3Pipe } from './post-filter-3.pipe';
// import { Ng4FilesModule } from './ng4-files';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomePageComponent,
    PostFilterPipe,
    PostFilter2Pipe,
    PostFilter3Pipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    // Ng4FilesModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
