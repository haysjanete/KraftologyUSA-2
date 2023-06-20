import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CupService } from 'src/app/services/cup.service'
import { Cup } from 'src/app/shared/models/Cup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cups:Cup[] = [];
  constructor(private cupService:CupService, activatedRoute:ActivatedRoute) {
    let cupsObservable:Observable<Cup[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        cupsObservable = this.cupService.getAllCupsBySearchTerm(params.searchTerm);
      else if(params.tag)
        cupsObservable = this.cupService.getAllCupsByTag(params.tag);
      else
        cupsObservable = cupService.getAll();

        cupsObservable.subscribe((serverCups) => {
          this.cups = serverCups;
        })
    })
  }

  ngOnInit(): void{

  }
}
