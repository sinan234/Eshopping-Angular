import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
  })
  export class SearchService {
  
    searchValue = '';
  
    setSearchValue(value: string) {
      this.searchValue = value;
    console.log(this.searchValue)
    }
  
    getSearchValue() {   

      return this.searchValue;
    }
  
  }
  