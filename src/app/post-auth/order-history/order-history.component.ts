import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/dataService/data.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  constructor(
    private dataService: DataService,
  ) { }

  public orderHistory: any
  public user: any

  ngOnInit(): void {
    this.dataService.getCartData().subscribe(data => {
      // console.log(data)
      this.orderHistory = data.map(item => {
        const object: any = item.payload.doc.data();
        object["id"] = item.payload.doc.id;
        return object;

      })
      //console.log(this.orderHistory[0].data.user)
      this.user = localStorage.getItem('user')
      this.user = JSON.parse(this.user)
      //console.log(this.user.first_name)
      if (this.orderHistory) {
        this.orderHistory = this.orderHistory.filter((item: any) => {
          return item.data.user.toLowerCase().includes(this.user.first_name.toLowerCase())
        });
        //console.log(this.orderHistory)
      }
    })
  }
}
