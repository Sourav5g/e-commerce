import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selectedCartData: any

  constructor(
    private dataService: DataService,
    private commonService: CommonService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data: any) => {
      this.productDetails = data;
      // console.log(this.productDetails)
    })
    this.commonService._getCartData().subscribe((data: any) => {
      this.cartData = data;
      //console.log(this.cartData)
    })
  }

  // ADD PRODUCTS TO CART //
  addToCart(id: any) {
    let cart = this.productDetails.find((item: any) => item._id === id);
    //let updatedCart = localStorage.getItem("cartDetails")
    //console.log(updatedCart)
    this.cartData.push(cart);
    localStorage.setItem("cartDetails", JSON.stringify(this.cartData));
    this.commonService._setCartData(this.cartData)
    //this.cartData = this.commonService._getCartData()
    console.log(this.cartData)
  }

  //ROUTE TO THE PRODUCT DETAIL PAGE //
  getId(id:any){
    this.router.navigate(['product-details/',id]);
  }

}
