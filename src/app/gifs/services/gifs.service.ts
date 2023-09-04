import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../models/gifs.models';

@Injectable({ providedIn: 'root' })

export class GifsService {
    public gifList: Gif[] = []

    private _tagsHistory: string[] = []
    private apiKey: string = 'rFmsF0wrNLZhfqhlzSJ753Ns7GoTMJom'
    private url: string = 'https://api.giphy.com/v1/gifs'


    constructor(private http: HttpClient) {
        this.loadLocalStorage();
        console.log('gifs service ready');

    }


    get tagsHistory() {
        return [...this._tagsHistory];
    }



    searchTag(tag: string): void {
        if (tag.length === 0) return;
        this.organizeHisrotry(tag)

        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('limit', 10)
            .set('q', tag)
        this.http.get<SearchResponse>(`${this.url}/search`, { params })
            .subscribe(resp => {
                this.gifList = resp.data

                console.log(resp.data)
            })
        console.log(this._tagsHistory);
    }


    private organizeHisrotry(tag: string) {
        tag = tag.toLocaleLowerCase();

        if (this._tagsHistory.includes(tag)) {
            this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
        }
        this._tagsHistory.unshift(tag);
        this._tagsHistory = this._tagsHistory.splice(0, 10);
        this.saveLocalStorage()
    }

    private saveLocalStorage() {
        localStorage.setItem('history', JSON.stringify(this._tagsHistory))
    }


    private loadLocalStorage() {
        if (!localStorage.getItem('history')) return;
        this._tagsHistory = JSON.parse(localStorage.getItem('history')!)

        if (this._tagsHistory.length === 0) return;
        this.searchTag(this._tagsHistory[0]);
    }



}