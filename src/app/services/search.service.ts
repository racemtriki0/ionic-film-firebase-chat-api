import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiKey=environment.rapidAPIkEY;
  searchResults=new Subject();

  constructor(private http:HttpClient) { }
  getResultats(searchTerm:String):Observable<any>{
    return this.http.get(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?
    q=${searchTerm}&pageNumber=1&pageSize=10&autoCorrect=true`,
    {
      headers:{
        'x-rapidapi-key': '77878dca1cmsh19f7292f885ea2ep17db0cjsnf2710119593a'

      }
    })
  }
  passResults(results):void{
    this.searchResults.next(results)
  }

  getpassedResults():Observable<any>{
    return this.searchResults.asObservable();
  }
}
