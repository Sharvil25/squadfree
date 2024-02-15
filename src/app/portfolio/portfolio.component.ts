import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  selectiontab = ['ALL', 'APP', 'CARD', 'WEB'];

  portfolioImg = [
    {
      img: '/assets/img/portfolio/portfolio-1.jpg',
      type: ['ALL', 'APP'],
    },
    {
      img: '/assets/img/portfolio/portfolio-2.jpg',
      type: ['ALL', 'WEB'],
    },
    {
      img: '/assets/img/portfolio/portfolio-3.jpg',
      type: ['ALL', 'APP'],
    },
    {
      img: '/assets/img/portfolio/portfolio-4.jpg',
      type: ['ALL', 'CARD'],
    },
    {
      img: '/assets/img/portfolio/portfolio-5.jpg',
      type: ['ALL', 'CARD'],
    },
    {
      img: '/assets/img/portfolio/portfolio-6.jpg',
      type: ['ALL', 'APP'],
    },
    {
      img: '/assets/img/portfolio/portfolio-7.jpg',
      type: ['ALL', 'WEB'],
    },
    {
      img: '/assets/img/portfolio/portfolio-8.jpg',
      type: ['ALL', 'CARD'],
    },
    {
      img: '/assets/img/portfolio/portfolio-9.jpg',
      type: ['ALL', 'WEB'],
    },
  ];

  filterImages = this.portfolioImg;

  currentTab = 'ALL';

  setFilteredImages(type: any) {
    this.currentTab = type;
    this.filterImages = this.portfolioImg.filter((data) =>
      data.type.includes(type)
    );
  }
}
