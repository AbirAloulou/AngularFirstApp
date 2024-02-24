import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  constructor(private AUTH: AuthService, private router: Router) {}
  logout(): void {
    this.AUTH.doLogout().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
