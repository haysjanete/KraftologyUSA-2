import { Injectable } from '@angular/core';
import {sample_items, sample_tags} from 'src/data';
import {Cup} from '../shared/models/Cup';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class CupService {

  constructor() { }

  getAll():Cup[ ]{
    return sample_items;
  }

  getAllCupsBySearchTerm(searchTerm:string){
    return this.getAll().filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllCupsByTag(tag:string):Cup[]{
    return tag == "All"?
    this.getAll():
    this.getAll().filter(item => item.tags?.includes(tag));
  }

  getCupByID(itemId:string):Cup{
    return this.getAll().find(item => item.id == itemId) ?? new Cup();
  }
}
