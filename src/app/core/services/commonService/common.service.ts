import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private myCartData:any
  private authData : BehaviorSubject<any> = new BehaviorSubject(null);
  private cartData : BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  setData(data: any) {
    this.authData.next(data);
  }

  getData() {
    return this.authData.asObservable();
  }

  _setCartData(data:any){
    this.cartData.next(data)
  }

  _getCartData(){
    return this.cartData.asObservable();
  }

  //REMOVE FROM CART //
  _removeFromCart(index:any): void {
    
    this.myCartData = localStorage.getItem("cartDetails")
    this.myCartData = JSON.parse(this.myCartData)
    this.myCartData.splice(index, 1);
    localStorage.setItem('cartDetails', JSON.stringify(this.myCartData));
  }

   // GET CART DATA //
   _getCartDataFrmLocalStorage() {
     let data:any
     data = localStorage.getItem("cartDetails")
     data = JSON.parse(data)
     return data ;
  }
}
