import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '@core/services/auth0/auth0.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'centiva-registry-webform';
  constructor(private auth: Auth0Service) {}
  ngOnInit(): void {
    const token = localStorage.getItem('idToken');
    const parsedToken = JSON.parse(atob(token.split('.')[1]));
    setInterval(() => {
      const currentTime = new Date().getTime() / 1000;
      if (currentTime > parsedToken.exp) {
        this.auth.logout();
      }
    }, 10000);
  }
}
