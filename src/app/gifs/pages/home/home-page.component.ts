import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../models/gifs.models';

@Component({
  selector: 'gifs-home',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  title: string = ''

  get gifs(): Gif[] {
    return this.gifsService.gifList
  }

  get titulo(): string {
    return this.title = this.gifsService.tagsHistory[0]
  }

  ngOnInit(): void {
  }

}
