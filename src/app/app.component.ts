import { Component } from '@angular/core';
import { User, AuthService } from './core/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-boilerplate';

  currentUser: User;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.currentUser.subscribe((x) => (this.currentUser = x));
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
