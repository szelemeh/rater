import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    private user: firebase.User;

    constructor(
        private authService: AuthService,
    ) { }

    ngOnInit() {
        this.authService.getAuthState()
            .subscribe(user => {
                this.user = user;
            })
    }

    getUserEmail() {
        return this.user.email;
    }

    logout() {
        this.authService.logoutUser();
    }

}
