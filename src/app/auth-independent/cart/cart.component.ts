import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/commonService/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartDetails: any
  unitTotal = 0
  subTotal = 0

  constructor(public CommonService: CommonService) { }

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
    let calculatePrice: any
    // console.log(event.target.value)
    //console.log(data)
    // console.log(index)
    //console.log(this.cartDetails[index].price )
    calculatePrice = this.cartDetails[index].price * event.target.value
    // console.log(calculatePrice )
    this.unitTotal = this.unitTotal + calculatePrice
    console.log(this.unitTotal)

  }

  calculateTotalPrice() {
    // console.log(this.cartDetails.length)
    this.subTotal = 0
    for (let i = 0; i < this.cartDetails.length; i++) {
      this.subTotal += JSON.parse(this.cartDetails[i].price)
    }
    //console.log(this.subTotal)
  }

}
