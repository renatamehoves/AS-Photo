import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'maincarrousel',
  standalone: true,
  imports: [NgbCarouselModule, NgIf],
  templateUrl: './maincarrousel.component.html',
  styleUrls: ['./maincarrousel.component.css']
})
export class MaincarrouselComponent {

  images = [
    {

      title: 'First Slide',
      short: 'First Slide Short Description',
      src: 'assets/0.webp'
    },
    {

      title: 'Second Slide',
      short: 'Second Slide Short Description',
      src: 'assets/1.webp'
    },
    {

      title: 'Third Slide',
      short: 'Second Slide Short Description',
      src: 'assets/2.webp'
    }
  ]

}
