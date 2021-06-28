import { Component, OnInit } from '@angular/core';
import { CartComponent } from 'src/app/auth-independent/cart/cart.component';
import { CommonService } from 'src/app/core/services/commonService/common.service';
import { DataService } from 'src/app/core/services/dataService/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  cartData: any = []
  productDetails: any
  selectedCartData:any
  
  constructor(
    private dataService: DataService,
    private commonService: CommonService

  ) { }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data: any) => {
      this.productDetails = data;
      // console.log(this.productDetails)
    })
  }

  // ADD PRODUCTS TO CART //
  addToCart(id: any) {
    let cart = this.productDetails.find((item: any) => item._id === id);
    this.cartData.push(cart);
    localStorage.setItem("cartDetails", JSON.stringify(this.cartData));
    this.commonService._setCartData(this.cartData)
    console.log(this.cartData)
  }

}
