import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CardapiService } from 'src/app/services/cardapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItemNumber: number =0;
  public searchTerm !: string;
  constructor(private cardApi : CardapiService) { }

  ngOnInit(): void {
    this.cardApi.getProductData().subscribe(res => {
      this.totalItemNumber = res.length;
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cardApi.search.next(this.searchTerm);
  }

}
