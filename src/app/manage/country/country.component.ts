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
  country_code='';
  name='';

  ngOnInit() {
    this.onDataLoad();
  }


  onSubmit(formData: any){
    console.log(formData);
    this.httpclient.post('http://localhost:8000/save-country',{
      country_code:formData.value.country_code,
      name:formData.value.name,
    }).subscribe(
      (res) => {
        this.onDataLoad();        
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
        this.countryList = res;
      },  
      err => {
        console.log("Error occured");
      }
    )
  }


  reset(form: any){
    form.resetForm();
  }
}
