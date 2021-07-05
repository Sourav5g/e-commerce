import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/commonService/common.service';
import { DataService } from 'src/app/core/services/dataService/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems: any
  singleCartItem!: object;
  user!: any;

  constructor(
    private router: Router,
    public CommonService: CommonService,
    public dataService: DataService,

  ) { }

  ngOnInit(): void {
    this.cartItems = localStorage.getItem("cartDetails");
    this.cartItems = JSON.parse(this.cartItems)
    this.CommonService._setCartData(this.cartItems)
    this.CommonService._getCartData().subscribe((data: any) => {
      this.cartItems = data;
      //console.log(this.cartItems)
    })
  }

  routeTo(routeName: any) {
    this.router.navigate([routeName]);
  }

  submit() {
    this.user = localStorage.getItem("user");
    this.user = JSON.parse(this.user)
    //console.log(this.user)
    for (let i = 0; i < this.cartItems.length; i++) {
      this.cartItems[i]["user"] = this.user.first_name
      this.singleCartItem = this.cartItems[i]
      this.dataService.addCartData(this.singleCartItem)
    }
    localStorage.removeItem("cartDetails")
    this.CommonService._clearCartData()
  }
}
