import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';




@Component({
  selector: 'ns-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  moduleId: module.id,
})
export class Page1Component implements OnInit {
  
  countries = null;

  constructor(private countryservice: CountryService) {}
  

 

  ngOnInit() {
    this.countryservice.getCountries().subscribe(country => {
      this.countries = country;
    })
    
  }

}
