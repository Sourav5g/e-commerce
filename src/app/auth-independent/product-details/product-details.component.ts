import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/core/services/commonService/common.service';
import { DataService } from 'src/app/core/services/dataService/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id!: any;
  productList: any
  product:any
  cartData: any = []
  constructor(
    private route: ActivatedRoute,
    public dataService: DataService,
    public commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe((data: any) => {
      this.productList = data;
      //console.log(this.productDetails)
      this.findProduct();
    })
    this.id = this.route.snapshot.paramMap.get('id')
    //console.log(this.id)
    this.commonService._getCartData().subscribe((data: any) => {
      this.cartData = data;
      //console.log(this.cartData)
    })   
  }

  // ADD PRODUCTS TO CART //
  addToCart(id: any) {
     let cart = this.productList.find((item: any) => item._id === id);
     //console.log(cart)
     this.cartData.push(cart);
     localStorage.setItem("cartDetails", JSON.stringify(this.cartData));
     this.commonService._setCartData(this.cartData)
     //console.log(this.cartData)
  }

  findProduct(){
    this.product = this.productList.find((item: any) => item._id === this.id);
    //console.log(this.product.image)
  }

}
