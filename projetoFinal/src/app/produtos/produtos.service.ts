import { Produto } from './produto';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ProdutoService {

    constructor(private http: HttpClient) { }

    protected UrlServiceV1: string = "https://api.nasa.gov";

    obterProdutos(): Observable<Produto[]> {
        return this.http.get<Produto[]>(`${this.UrlServiceV1}/planetary/apod?api_key=4wM6VSry1NGNydFe38dliNdUMdIx1i5p3M8vWofz`);
    }
}