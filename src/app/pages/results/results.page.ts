import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  movieApiUrl='';
  searchTitle='';
  movieData={
    title:'',
    description:'',
    imageurl:''
  };
 

  constructor(public http:HttpClient) {
    
   }

  ngOnInit() {
    
  }
  readApi(url :string){
    return this.http.get(url);
  }
  searchMovie(){
    const search=encodeURIComponent(this.searchTitle).trim();
    this.movieApiUrl='http://www.omdbapi.com/?apikey=5709f62a&t='+search;
    this.readApi(this.movieApiUrl)
    .subscribe((data)=>{
      console.log(data);
      this.movieData.title=data['Title'];
      this.movieData.description=data['Plot'];
      this.movieData.imageurl=data['Poster'];
    });

  }




}
