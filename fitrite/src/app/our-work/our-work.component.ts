import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-work.component.html',
  styleUrl: './our-work.component.scss'
})
export class OurWorkComponent {
    deckImages = ['assets/images/gallery-2/beach_deck_1.jpg'];
    kitchenImages = [];
    otherImages = [];

    constructor() { }

    getThumbnail(image: string): string {
      const base = image.substring(0, image.lastIndexOf('.'));
      const extension = image.substring(image.lastIndexOf('.'));
      return `${base}_thumb${extension}`;
  }

}
