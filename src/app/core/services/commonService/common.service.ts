import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private myCartData: any
  private authData: BehaviorSubject<any> = new BehaviorSubject(null);
  private cartData: BehaviorSubject<any> = new BehaviorSubject(null);
  private searchData: BehaviorSubject<any> = new BehaviorSubject(null);
  private filterPrice: BehaviorSubject<any> = new BehaviorSubject(null);


  constructor() { }
  //AUTH DATA SET AS OBSERVABLE
  setData(data: any) {
    this.authData.next(data);
  }

  getData() {
    return this.authData.asObservable();
  }

  //SET FILTER PRICE VALUR RANGE
  setFilterPrice(data: any) {
    this.filterPrice.next(data);
  }

  getFilterPrice() {
    return this.filterPrice.asObservable();
  }

  //SEARCH DATA SET AS OBSERVABLE
  setSearchData(data: any) {
    this.searchData.next(data);
  }

  getSearchData() {
    return this.searchData.asObservable();
  }

  _setCartData(data: any) {
    this.cartData.next(data)
  }
  _clearCartData() {
    this.cartData.next('');
  }
  // GET CART DATA FROM OBSERVABLE //
  _getCartData() {
    return this.cartData.asObservable();
  }

  //REMOVE FROM CART //
  _removeFromCart(index: any): void {

    this.myCartData = localStorage.getItem("cartDetails")
    this.myCartData = JSON.parse(this.myCartData)
    this.myCartData.splice(index, 1);
    localStorage.setItem('cartDetails', JSON.stringify(this.myCartData));
  }

  // GET CART DATA FROM LOCAL STORAGE //
  _getCartDataFrmLocalStorage() {
    let data: any
    data = localStorage.getItem("cartDetails")
    data = JSON.parse(data)
    return data;
  }

}
