import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor(private gifsService: GifsService) {
  }


  get tagList() {
    return this.gifsService.tagsHistory
  }



  cargarBusqueda(history: string) {
    this.gifsService.searchTag(history)
  }

  ngOnInit(): void {
  }


}
