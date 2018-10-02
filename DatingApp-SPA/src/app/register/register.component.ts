import { Component, OnInit,  EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertfyService } from '../_services/alertfy.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   @Output() cancelRegister = new EventEmitter();

  model: any = {};


  constructor(private authService: AuthService, private alertify: AlertfyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(r => {
      this.alertify.success('registration successful');
    }, error => {
      this.alertify.error(error);
    });
   }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
