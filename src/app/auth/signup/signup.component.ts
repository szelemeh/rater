import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    private errorMessage: string = null;

    private email: string = null;
    private password: string = null;

    constructor(
        private authService: AuthService,
    ) { }

    isError(): boolean {
        return this.errorMessage != null;
    }
    
    ngOnInit() {
        this.authService.eventAuthError$.subscribe(errorMessage => {
            this.errorMessage = errorMessage;
        });
    }

    private signupUser(): void {
        this.authService.signupUser(this.email, this.password);
    }
    
}
