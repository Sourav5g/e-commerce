import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/commonService/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartDetails: any
  unitTotal: any = []
  subTotal = 0
  public calculatePrice: any;

  constructor(
    public CommonService: CommonService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.cartDetails = localStorage.getItem("cartDetails");
    this.cartDetails = JSON.parse(this.cartDetails)
    this.CommonService._setCartData(this.cartDetails)
    this.CommonService._getCartData().subscribe((data: any) => {
      this.cartDetails = data;
      //console.log(this.cartDetails)
      this.calculateTotalPrice()
    })
  }

  // REMOVE ITEM FROM CART //
  removeFromCart(index: number) {
    this.CommonService._removeFromCart(index)
    this.cartDetails = this.CommonService._getCartDataFrmLocalStorage();
    localStorage.setItem("cartDetails", JSON.stringify(this.cartDetails));
    this.CommonService._setCartData(this.cartDetails)
  }

  caculateProductPrice(event: any, data: any, index: any) {

    // console.log(event.target.value)
    // // console.log(data)
    // // console.log(index)
    // if (event.target.value) {
    //   //calculatePrice = 0
    //   this.calculatePrice = this.cartDetails[index].price * event.target.value
    //   //this.cartDetails[index].price = calculatePrice
    //   console.log(this.calculatePrice)
    // }
    // console.log(this.cartDetails[index].price)

    // this.subTotal = 0
    // for (let i = 0; i < this.cartDetails.length; i++) {
    //   this.subTotal += JSON.parse(this.cartDetails[i].price)
    // }
  }

  calculateTotalPrice() {
    // console.log(this.cartDetails.length)
    this.subTotal = 0
    if (this.cartDetails) {
      for (let i = 0; i < this.cartDetails.length; i++) {
        this.subTotal += JSON.parse(this.cartDetails[i].price)
      }
    }
    //console.log(this.subTotal)
  }

  routeTo(routeName: any) {
    this.router.navigate([routeName]);
  }

}
