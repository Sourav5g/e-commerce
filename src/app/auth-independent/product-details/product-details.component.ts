import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/core/services/commonService/common.service';
import { DataService } from 'src/app/core/services/dataService/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id!: any;
  productList: any
  product: any
  cartData: any = []
  reviewFormData!: FormGroup;
  reviewData: any = []

  constructor(
    private route: ActivatedRoute,
    public dataService: DataService,
    public commonService: CommonService,
    private reviewfb: FormBuilder,
  ) { }

  ngOnInit(): void {
    //GET PRODUCTS DATA
    this.dataService.getProducts().subscribe((data: any) => {
      this.productList = data;
      this.findProduct();
    })

    //GET REVIEW DATA
    this.dataService.getReviewData().subscribe((data: any) => {
      this.reviewData = data.map((item: { payload: { doc: { data: () => any; id: any; }; }; }) => {
        const object: any = item.payload.doc.data();
        return object;
      })
      //console.log(this.reviewData)
      this.findReiview();

    })

    this.id = this.route.snapshot.paramMap.get('id')
    //GET CART DATA
    this.commonService._getCartData().subscribe((data: any) => {
      this.cartData = data;
    })

    this.reviewForm();
  }

  // ADD PRODUCTS TO CART //
  addToCart(id: any) {
    let cart = this.productList.find((item: any) => item._id === id);
    this.cartData.push(cart);
    localStorage.setItem("cartDetails", JSON.stringify(this.cartData));
    this.commonService._setCartData(this.cartData)
  }

  //FIND PRODUCT BY ID
  findProduct() {
    this.product = this.productList.find((item: any) => item._id === this.id);
  }

  //FIND REVIEW BY ID
  findReiview() {
    //console.log(this.reviewData)
    if (this.reviewData) {
      this.reviewData = this.reviewData.filter((item: any) => {
        return (item.id == this.id)
      });
      //console.log(this.reviewData)
    }
  }

  reviewForm() {
    this.reviewFormData = this.reviewfb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      review: ['', Validators.required],
      reviewDigit: ['', Validators.required],

    });
  }

  submit() {
    //console.log(this.reviewFormData.value)
    this.dataService.addReviewData(this.reviewFormData.value, this.id)
    this.reviewFormData.reset();
  }

}
