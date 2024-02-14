import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

   navtabs = [
    {
      name: "Home",
      url: "/",
    },
  
    {
      name: "Service",
      url: "/service",
    },
  
    {
      name: "Portfolio",
      url: "/portfolio",
    },
  
    {
      name: "Team",
      url: "/team",
    },
  
    {
      name: "Contact",
      url: "/contact",
    },
  ];

}
