import { Component } from '@angular/core';
import { foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FooditemsService } from '../services/fooditems.service';


@Component({

  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
  food!:foods;
  constructor(private activatedRoute:ActivatedRoute,private foodservice:FooditemsService){
    activatedRoute.params.subscribe((params)=> {
      if(params['id'])
      this.food=foodservice.getfoodbyid(params['id'])
    })
  }
}
