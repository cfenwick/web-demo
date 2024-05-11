import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAlbum, Lightbox, LightboxModule } from 'ngx-lightbox';

@Component({
    selector: 'app-our-work',
    standalone: true,
    imports: [CommonModule, HttpClientModule, LightboxModule],
    providers: [HttpClient, Lightbox],
    templateUrl: './our-work.component.html',
    styleUrl: './our-work.component.scss',
})
export class OurWorkComponent {
    kitchenImages = [];
    otherImages = [];
    deckImages: Array<IAlbum> = []; // Initialize deckImages as an empty array of type string[]

    constructor(
        private http: HttpClient,
        private _lightbox: Lightbox
    ) {
        this.getImages('assets/images/deck-gallery').subscribe(images => {
            images.forEach(image =>
                this.deckImages.push({ src: image, thumb: this.getThumbnail(image) }));
        });
    }

    getThumbnail(image: string): string {
        const base = image.substring(0, image.lastIndexOf('.'));
        const extension = image.substring(image.lastIndexOf('.'));
        return `${base}_thumb${extension}`;
    }

    getImages(directory: string): Observable<string[]> {
        const imageFile = `${directory}/images.json`;
        return this.http.get<string[]>(imageFile).pipe(
            map((images: string[]) => images.map((image: string) => `${directory}/${image}`))
        );
    }

    open(album:Array<IAlbum>, index: number): void { // open lightbox
        console.log('clicked image');
        this._lightbox.open(album, index);
    }

    close(): void { // close lightbox programmatically
        this._lightbox.close();
    }
}
