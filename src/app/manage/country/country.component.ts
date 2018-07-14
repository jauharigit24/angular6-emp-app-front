import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent{

  constructor(private httpclient: HttpClient) { 
    
  }

  countryList = {};
  ngOnInit() {
    this.onDataLoad();
  }


  onSubmit(formData: any){
    this.httpclient.post('http://localhost:8000/save-country',{
      country_code:'US',
      country:'United States'
    }).subscribe(
      (res) => {
        console.log(res);
      },  
      err => {
        console.log("Error occured");
      }
    )
  }

  onDataLoad(){
    this.httpclient.get('http://localhost:8000/get-countrylist',{
    }).subscribe(
      (res) => {
        
      },  
      err => {
        console.log("Error occured");
      }
    )
  }
}
