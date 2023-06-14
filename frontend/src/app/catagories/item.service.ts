import { Injectable } from '@angular/core';
import {sample_items, sample_tags} from 'src/data';
import {Item} from '../shared/models/items';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getAll():Item[ ]{
    return sample_items;
  }

  getAllItemsBySearchTerm(searchTerm:string){
    return this.getAll().filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllItemsByTag(tag:string):Item[]{
    return tag == "All"?
    this.getAll():
    this.getAll().filter(item => item.tags?.includes(tag));
  }
}
