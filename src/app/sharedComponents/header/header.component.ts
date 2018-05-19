import {Component, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  closeResult: string;
  private isLogin;
  private modal;
  loginFailed = false;

  onlogin(fromData) {
    this.auth.login(fromData).then((data) => {
      if(data.status == 200) {
        this.modal.close();
        localStorage.setItem('api_key', data.api_key);
        this.auth.loginstatus.next(true);
      }
      else {
        this.loginFailed = true;
      }

    });
  }

  constructor(private modalService: NgbModal, private auth: AuthService) {
  }

  open(content) {
    this.modal = this.modalService.open(content);
    this.modal.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() {
    this.auth.islogin();
    this.auth.loginstatus.subscribe((login) => {
      this.isLogin = login;
    });
  }

}
