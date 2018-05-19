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
  loginErros;
  onlogin(fromData) {
    this.auth.login(fromData).then((res) =>{
      this.loginErros = [];
      if ( res.status === 200 ) {
        localStorage.setItem('api_key', res.api_key);
        this.auth.loginstatus.next(true);
        this.modal.close();
      } else {
        Object.keys(res).forEach((value, index) => {
          this.loginErros.push(res[value]);
        });

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
