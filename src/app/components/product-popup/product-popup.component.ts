import { Component, Input } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-product-popup',
  standalone: true,
  imports: [ProductComponent,CommonModule,NgLabelTemplateDirective,NgOptionTemplateDirective, NgSelectComponent,HeaderComponent],
  templateUrl: './product-popup.component.html',
  styleUrl: './product-popup.component.scss'
})
export class ProductPopupComponent {
  @Input() product: any; 

  imgPath:string='';
  
  changeImg(num:number){
    if(num===1){
      this.imgPath = this.product.images[0]
    }else{
      this.imgPath = this.product.images[1]
    }
  }


}
