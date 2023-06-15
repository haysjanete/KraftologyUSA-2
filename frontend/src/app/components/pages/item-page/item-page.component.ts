import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/catagories/cart.service';
import { ItemService } from 'src/app/catagories/item.service';
import { Item } from 'src/app/shared/models/items';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
  item!: Item
  constructor(activatedRoute:ActivatedRoute, itemService:ItemService, private cartService:CartService, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.item = itemService.getItemByID(params.id);
    })
  }

  ngOnInit(): void{
  }

  addToCart(){
    this.cartService.addToCart(this.item);
    this.router.navigateByUrl('/cart-page');
  }
}
