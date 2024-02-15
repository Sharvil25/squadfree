import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  teamImage = [
    {
      img: '/assets/img/team/team-1.jpg',
      name: 'Walter White',
      position: 'Chief Executive Officer',
      socialMedia: [
        {
          icon: 'fa-brands fa-x-twitter',
          path: '#',
        },

        {
          icon: 'fa-brands fa-facebook',
          path: '#',
        },

        {
          icon: 'fa-brands fa-instagram',
          path: '#',
        },

        {
          icon: 'fa-brands fa-linkedin',
          path: '#',
        },
      ],
    },

    {
      img: '/assets/img/team/team-2.jpg',
      name: 'Sarah Jhonson',
      position: 'Product Manager',
      socialMedia: [
        {
          icon: 'fa-brands fa-x-twitter',
          path: '#',
        },

        {
          icon: 'fa-brands fa-facebook',
          path: '#',
        },

        {
          icon: 'fa-brands fa-instagram',
          path: '#',
        },

        {
          icon: 'fa-brands fa-linkedin',
          path: '#',
        },
      ],
    },

    {
      img: '/assets/img/team/team-3.jpg',
      name: 'William Anderson',
      position: 'CTO',
      socialMedia: [
        {
          icon: 'fa-brands fa-x-twitter',
          path: '#',
        },

        {
          icon: 'fa-brands fa-facebook',
          path: '#',
        },

        {
          icon: 'fa-brands fa-instagram',
          path: '#',
        },

        {
          icon: 'fa-brands fa-linkedin',
          path: '#',
        },
      ],
    },
  ];
}
