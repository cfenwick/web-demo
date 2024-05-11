import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, CarouselModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    images = ['assets/beach_deck_slider.jpg', 'assets/combo_slider.jpg',
        'assets/double_deck_slider.jpg'];
}
