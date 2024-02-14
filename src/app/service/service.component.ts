import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent {
  servicecard = [
    {
      iclass: 'fa-solid fa-basketball',
      name: 'Lorem Ipsum',
      description:
        'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
    },

    {
      iclass: 'fa-regular fa-file-lines',
      name: 'Sed ut perspiciatis',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    },

    {
      iclass: 'fa-solid fa-gauge-high',
      name: 'Nemo Enim',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
    },

    {
      iclass: 'fa-solid fa-earth-americas',
      name: 'Magni Dolores',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
    },
  ];
}
