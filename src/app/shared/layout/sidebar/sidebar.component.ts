import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/commonService/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private CommonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  priceRangeFilter(event:any){
    //console.log(event.value)
    this.CommonService.setFilterPrice(event.value)
  }

}
