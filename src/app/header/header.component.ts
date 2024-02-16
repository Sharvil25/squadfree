import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  currentRoute = '';
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  navtabs = [
    {
      name: 'Home',
      url: '/',
    },

    {
      name: 'Service',
      url: '/service',
    },

    {
      name: 'Portfolio',
      url: '/portfolio',
    },

    {
      name: 'Team',
      url: '/team',
    },

    {
      name: 'Contact',
      url: '/contact',
    },
  ];

  isMobolieDisplay = false;
  toggleIsMobolieDisplay() {
    console.log('first');
    this.isMobolieDisplay = !this.isMobolieDisplay;
  }
  hideMobileDropdown(){
    this.isMobolieDisplay = false
  }
}
