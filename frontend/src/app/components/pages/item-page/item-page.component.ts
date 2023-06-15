import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/catagories/cart.service';
import { CupService } from 'src/app/catagories/cup-service';
import { Cup } from 'src/app/shared/models/Cup';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
  cup!: Cup
  constructor(activatedRoute:ActivatedRoute, cupService:CupService, private cartService:CartService, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.cup = cupService.getItemByID(params.id);
    })
  }

  ngOnInit(): void{
  }

  addToCart(){
    this.cartService.addToCart(this.cup);
    this.router.navigateByUrl('/cart-page');
  }
}
