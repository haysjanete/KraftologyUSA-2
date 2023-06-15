import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CupService } from 'src/app/services/cup-service'
import { Cup } from 'src/app/shared/models/Cup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cups:Cup[] = [];
  constructor(private cupService:CupService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      this.cups = this.cupService.getAllCupsBySearchTerm(params.searchTerm);
      else if(params.tag)
      this.cups = this.cupService.getAllCupsByTag(params.tag);
      else
      this.cups = cupService.getAll();
    })
  }

  ngOnInit(): void{

  }
}
