import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    template: `
    <h5>Buscar</h5>
    <input class="form-control" 
    type="text"
    placeholder="Buscar gift..."
    (keyup.enter)="searchTag()"
    #txtTagInput
    >
    `
})

export class SearchBoxComponent {
    constructor(private gifsService: GifsService) { }

    @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>


    // searchTag(newTag: string) {
    searchTag() {
        const newTag = this.tagInput.nativeElement.value;
        this.gifsService.searchTag(newTag);

        this.tagInput.nativeElement.value = '';

    }

}

