import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/catagories/item.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?:Tag[];
  constructor(itemService:ItemService) {
    this.tags = itemService.getAllTags();
  }

  ngOnInit(): void {

  }
}
