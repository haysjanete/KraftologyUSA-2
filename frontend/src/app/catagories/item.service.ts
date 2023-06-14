import { Injectable } from '@angular/core';
import {sample_items} from 'src/data';
import {Item} from '../shared/models/items';

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
}
