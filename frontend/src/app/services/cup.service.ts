import { Injectable } from '@angular/core';
import {sample_cups, sample_tags} from 'src/data';
import {Cup} from '../shared/models/Cup';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class CupService {

  constructor() { }

  getAll():Cup[ ]{
    return sample_cups;
  }

  getAllCupsBySearchTerm(searchTerm:string){
    return this.getAll().filter(cup => cup.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllCupsByTag(tag:string):Cup[]{
    return tag == "All"?
    this.getAll():
    this.getAll().filter(cup => cup.tags?.includes(tag));
  }

  getCupById(cupId:string):Cup{
    return this.getAll().find(cup => cup.id == cupId) ?? new Cup();
  }
}
