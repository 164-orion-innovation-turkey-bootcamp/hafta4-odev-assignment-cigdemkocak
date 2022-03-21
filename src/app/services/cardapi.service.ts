import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardapiService {
  cardDataList:any = [];
  productList= new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');

  constructor(private http:HttpClient) { }
  // Get product Data
  getProductData(){
    return this.productList.asObservable();
  }
  //Set Product Data
  setProduct(product:any){
    this.cardDataList.push(...product);
    this.productList.next(product);
  }
  // Add to card details
  addToCard(product:any){
    this.cardDataList.push(product);
    this.productList.next(this.cardDataList);
    this.getTotalAmount();
    console.log(this.cardDataList);
  }
  //get total amount
  getTotalAmount(){
    let grandTotal= 0;
    this.cardDataList.map((a:any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }
  //Remove card data one by one 
  removeCardData(product:any){
    this.cardDataList.map((a:any, index:any) => {
      if(product.id === a.id){
        this.cardDataList.splice(index,1);
      }
    })
    this.productList.next(this.cardDataList)
  }
  //Remove All Card Data
  removeAllCard(){
    this.cardDataList= [];
    this.productList.next(this.cardDataList);
  }
}
