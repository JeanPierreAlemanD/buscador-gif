import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../models/gifs.models';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent implements OnInit {

  @Input()
  gifsLista: Gif[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
