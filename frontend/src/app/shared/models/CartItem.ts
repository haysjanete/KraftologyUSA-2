import { Cup } from "./Cup";

export class CartItem{
  constructor(public cup:Cup){}
  quantity:number = 1;
  price: number = this.cup.price;
}
