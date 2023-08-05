import { Component } from '@angular/core';
import { FooditemsService } from '../services/fooditems.service';
import { foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
food:foods[]=[];
  constructor(private item:FooditemsService,private router:ActivatedRoute){
    this.router.params.subscribe(params =>{
      if(params['searchItem'])
      this.food=this.item.fooditem().filter(food=> food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))

else
this.food=this.item.fooditem();
    });
  

  }

}
