import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private errorMessage: string = null;

    private email: string = null;
    private password: string = null;
    
    constructor(
        private authService: AuthService,
    ) { }
    
    ngOnInit() {
        this.authService.eventAuthError$.subscribe(errorMessage => {
            this.errorMessage = errorMessage;
        });
    }

    isError(): boolean {
        return this.errorMessage != null;
    }

    private loginUser(): void {
        this.authService.loginUser(this.email, this.password);
    }

}
