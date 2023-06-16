import { Component, OnInit } from '@angular/core';
import { CupService } from 'src/app/services/cup.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?:Tag[];
  constructor(cupService:CupService) {
    this.tags = cupService.getAllTags();
  }

  ngOnInit(): void {

  }
}
