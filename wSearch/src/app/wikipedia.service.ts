import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
HttpClient;
@Injectable({
  providedIn: "root",
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    return this.http.get(`https://en.Wikipedia.org/w/api.php`,{
      params:{
        action:'query',
        format:'json',
        list:'search',
        utf8:'1',
        srsearch:term,
        origin:'*'
      }
    })
  }
}
