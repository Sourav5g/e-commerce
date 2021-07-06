import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { products } from '../../model/products';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userUrl = 'assets/products.json';
  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore
  ) { }

  //ADDING REGISTER DATA  IN DATABASE USER
  addData(userData: any) {
    return this.firestore.collection('users').add(userData);
  }

  getData() {
    return this.firestore.collection('users').snapshotChanges();
  }

  getProducts(): Observable<products[]> {
    return this.http.get<products[]>(this.userUrl)
  }

  //ADDING CART DATA IN ORDER HISTORY
  addCartData(cartData:any) {
    //console.log(cartData)
    const orderTime = {
      data:cartData,
			timeStamp: new Date().getTime()
		};
    return this.firestore.collection('orderHistory').add(orderTime);
  }

  getCartData() {
    return this.firestore.collection('orderHistory').snapshotChanges();
  }
}
