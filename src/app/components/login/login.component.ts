import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.login(this.email, this.password)
    .then((res)=>{
      this.flashMessagesService.show('Login Succesful', {
        cssClass: 'alert-success',
        timeout: 5000
      });
      this.router.navigate(['/']);
    })
    .catch((err) => {
      this.flashMessagesService.show(err.messages, {
        cssClass: 'alert-danger',
        timeout: 5000
      });
      this.router.navigate(['/login']);
    });
  }

}
