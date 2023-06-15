import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CupService } from 'src/app/catagories/cup-service'
import { Cup } from 'src/app/shared/models/Cup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  items:Cup[] = [];
  constructor(private cupService:CupService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      this.items = this.cupService.getAllItemsBySearchTerm(params.searchTerm);
      else if(params.tag)
      this.items = this.cupService.getAllItemsByTag(params.tag);
      else
      this.items = cupService.getAll();
    })
  }

  ngOnInit(): void{

  }
}
