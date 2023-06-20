import { Injectable } from '@angular/core';
import {sample_cups, sample_tags} from 'src/data';
import {Cup} from '../shared/models/Cup';
import { Tag } from '../shared/models/Tag';
import { CUPS_BY_ID_URL, CUPS_BY_SEARCH_URL, CUPS_BY_TAG_URL, CUPS_TAGS_URL, CUPS_URL } from '../shared/constants/urls';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CupService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Cup[ ]>{
    return this.http.get<Cup[]>(CUPS_URL);
  }

  getAllCupsBySearchTerm(searchTerm:string){
    return this.http.get<Cup[]>(CUPS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>(CUPS_TAGS_URL);
  }

  getAllCupsByTag(tag:string): Observable<Cup[]>{
    return tag === "All" ?
    this.getAll():
    this.http.get<Cup[]>(CUPS_BY_TAG_URL + tag);
  }

  getCupById(cupId:string): Observable<Cup>{
    return this.http.get<Cup>(CUPS_BY_ID_URL + cupId);
  }
}
