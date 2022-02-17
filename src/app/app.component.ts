import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  zipCode:number
  data:any;
  zcode: number;
  url = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=5a4b2d457ecbef9eb2a71e480b947604';
  ccond: number;      temp: number;      temp_max: number;      temp_min: number;
      
    constructor(private http: HttpClient) {}

    setZip(zipcode) {
        this.zcode = zipcode;
        localStorage.setItem('ZipCode : ', zipcode);
        this.getData();
    }
    getData() {
        this.http.get(this.url).subscribe((res) => {
          this.data = res;
          this.ccond = this.data.weather[0].main;
          this.temp = this.data.main.temp;
          this.temp_max = this.data.main.temp_max;
          this.temp_min = this.data.main.temp_min;
          console.log(this.ccond + '   ' + this.temp  + '   ' +this.temp_min + '   ' +this.temp_max );        
    });    
  }

  sub(){
    
  }
}