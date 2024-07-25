// Framework
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
// Interfaces
import { ResponseList } from "../../interfaces/response-list.interface";
import { Anime } from "../../interfaces/anime.interface";

@Injectable({
    providedIn: "root",
})

export class JikanWrapperApiService {
    apiUrl: string = "https://api.jikan.moe/v4";

    constructor(private httpClient: HttpClient) { }

    getAllAnime(): Observable<ResponseList<Anime>> {
        return this.httpClient.get<ResponseList<Anime>>(this.apiUrl + "/anime");
    }

    getCurrentSeason(currentPage: number): Observable<ResponseList<Anime>> {
        return this.httpClient.get<ResponseList<Anime>>(this.apiUrl + "/seasons/now?continuing&page=" + currentPage);
    }

    getNextAnime(apiNum: number): Observable<ResponseList<Anime>> {
        return this.httpClient.get<ResponseList<Anime>>(this.apiUrl + "/anime" + apiNum + "/full");
    }

    getAnimeById(id: number): Observable<Response> {
        const url = `${this.apiUrl}/${id}`;
        return this.httpClient.get<Response>(url);
    }
}
