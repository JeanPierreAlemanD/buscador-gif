import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../models/gifs.models';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent implements OnInit {

  @Input()
  gifHijo!: Gif

  constructor() { }

  ngOnInit(): void {
    if(!this.gifHijo) throw new Error('Gif property is required');
  }

}
