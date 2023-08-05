import { Injectable } from '@angular/core';
import { foods } from '../shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FooditemsService {
  


    constructor() { }
    getfoodbyid(id:number):foods{
      return this.fooditem().find(food => food.id== id)!;
    }
  fooditem():foods[]
  {
    return [
      {
        id:1,
        name:'Pizza',
        price:1000,
        imageurl:'/assets/food1.jpg',
        Cocktime:'30-40min',
       tags:['FastFood','Pizza','Lunch']
      },
      {
        id:2,
        name:'Pizza',
        price:1200,
        imageurl:'/assets/food2.jpg',
        Cocktime:'30-40min',
       tags:['FastFood','Pizza','Lunch']
      },
      {
        id:3,
        name:'Meat-balls',
        price:700,
        imageurl:'/assets/food3.jpg',
        Cocktime:'40-50min',
        
        tags:['SlowFood','Lunch']
      },
      {
        id:4,
        name:'French-Fries',
        price:200,
        imageurl:'/assets/food4.jpg',
        Cocktime:'10-20min',
      
        tags:['FastFood','Fry']
      },
      {
        id:5,
        name:'Steaks',
        price:2000,
        imageurl:'/assets/food5.jpg',
        Cocktime:'35-45min',
     
        tags:['FastFood','Steaks','Lunch']
      },
      {
        id:6,
        name:'Grill-Burger',
        price:1100,
        imageurl:'/assets/food6.jpg',
        Cocktime:'20-30min',
   
        tags:['FastFood','Burger','Lunch']
      },
      {
        id:7,
        name:'Hamburger',
        price:1500,
        imageurl:'/assets/food7.jpg',
        Cocktime:'30-40min',
     
        tags:['FastFood','Burger','Lunch']
      },
      {
        id:8,
        name:'Pasta',
        price:500,
        imageurl:'/assets/food8.jpg',
        Cocktime:'15-25min',
       
        tags:['FastFood','Lunch']
      },
    
    
    
    
  ]
  }
}
