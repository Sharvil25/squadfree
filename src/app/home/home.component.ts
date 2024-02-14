import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  aboutdata = [
    {
      iclass: 'fa-regular fa-file-lines',
      name: 'Corporis voluptates sit',
      description:
        'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
    },

    {
      iclass: 'fa-solid fa-cube',
      name: 'Ullamco laboris nisi',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
    },

    {
      iclass: 'fa-solid fa-photo-film',
      name: 'Labore consequatur',
      description:
        'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere',
    },

    {
      iclass: 'fa-solid fa-shield',
      name: 'Beatae veritatis',
      description:
        'Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta',
    },
  ];
}
