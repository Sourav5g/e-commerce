import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/commonService/common.service';
import { LoginComponent } from '../../login/login.component';
import { RegisterComponent } from '../../register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartDetails: any
  userDetails: any
  public searchFilter: any = '';
  query!: string;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private CommonService: CommonService
  ) { }

  ngOnInit(): void {
    this.userDetails = localStorage.getItem("user");
    this.userDetails = JSON.parse(this.userDetails)
    this.CommonService.setData(this.userDetails) //Storing localstorage data in observable
    this.CommonService.getData().subscribe((data: any) => {
      this.userDetails = data;
      //console.log(this.userDetails)
    })
    //ALL CART ITEMS ASSIGNED IN OBSERVABLE
    this.cartDetails = localStorage.getItem("cartDetails");
    this.cartDetails = JSON.parse(this.cartDetails)
    this.CommonService._setCartData(this.cartDetails)
    this.CommonService._getCartData().subscribe((data: any) => {
      this.cartDetails = data;
      //console.log(this.cartDetails)
    })
  }

  userLogin() { //LOGIN WITH MODAL
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '780px',
      height: 'auto',
      data: {}
    });
  }

  userRegister() { //REGISTER WITH MODAL
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '780px',
      height: 'auto',
      data: {}
    });
  }

  routeTo(routeName: any) {
    this.router.navigate([routeName]);
  }

  userLogout() {
    localStorage.removeItem('user');
    this.CommonService.setData(null);
    // window.location.href = '';
  }

  // REMOVE ITEM FROM CART //
  removeFromCart(index: number) {
    this.CommonService._removeFromCart(index)
    this.cartDetails = this.CommonService._getCartDataFrmLocalStorage();
    //console.log(this.cartDetails)
    this.CommonService._setCartData(this.cartDetails)
  }
  //ROUTE TO PRODUCT DETAILS PAGE
  getId(id:any){
    this.router.navigate(['product-details/',id]);
    //console.log(id)
  }
  search(event:any){
    //console.log(event.target.value)
    this.CommonService.setSearchData(event.target.value)
  }

}
