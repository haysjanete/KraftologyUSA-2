import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CupService } from 'src/app/services/cup-service';
import { Cup } from 'src/app/shared/models/Cup';

@Component({
  selector: 'app-cup-page',
  templateUrl: './cup-page.component.html',
  styleUrls: ['./cup-page.component.css']
})
export class CupPageComponent implements OnInit {
  cup!: Cup
  constructor(activatedRoute:ActivatedRoute, cupService:CupService, private cartService:CartService, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.cup = cupService.getCupByID(params.id);
    })
  }

  ngOnInit(): void{
  }

  addToCart(){
    this.cartService.addToCart(this.cup);
    this.router.navigateByUrl('/cart-page');
  }
}
