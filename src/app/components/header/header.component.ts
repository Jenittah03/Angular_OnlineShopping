import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductPopupComponent } from '../product-popup/product-popup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProductComponent,ProductPopupComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public CartArray: any  = [];
  public Count:number = 0;

  AddProduct(product:any){
    if(!this.CartArray.includes(product)){
      product.SelectQuantity = 1
      product.TotalPrice = product.price
      this.CartArray.push(product);
      this.Count++
      this.CheckOut()
    }else{
      alert("Product Allready Added")
    }
    
  }

  RemoveProduct(index:number){
    this.checkoutAmount -= this.CartArray[index].TotalPrice

    if(index != -1){
      this.CartArray.splice(index , 1)
      this.Count--
    }

  }

  decrement(product:any){
    if(product.SelectQuantity > 1){
      product.SelectQuantity--
      product.TotalPrice = product.SelectQuantity * product.price
      this.checkoutAmount -= product.price
    }
  }

  increment(product:any){
    product.SelectQuantity++
    product.TotalPrice = product.SelectQuantity * product.price
    this.checkoutAmount += product.price
  }

  checkoutAmount: number = 0;
  CheckOut(){
    this.checkoutAmount = 0
    for(let i = 0 ; i < this.CartArray.length ; i++){
      this.checkoutAmount += this.CartArray[i].TotalPrice
    }
  }
  
  
}