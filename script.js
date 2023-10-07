'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order : function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]},

  orderDelivery : function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    adress,
  }){
    console.log(`Order recieved! ${this.starterMenu[starterIndex] }and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}}`);
  },

  orderPasta:function (ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza:function(mainIngredient,...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest1 ={
  name:'Capri',
  //numGuests:20,
  numGuests:0,
};

const rest2 ={
  name:'La Piazza',
owner :'Giovanni Rozzi',
};

const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

for(const item of menu) console.log(item);

for (const [i,el] of menu.entries()){
  console.log(`${i+1}:${el}`);
}

// // rest1.numGuests=rest1.numGuests||10;  
// // rest2.numGuests=rest2.numGuests||10;  

// // rest1.numGuests||=10;
// // rest2.numGuests||=10;

// rest1.numGuests??=10;
// rest2.numGuests??=10;

// // rest2.owner=rest2.owner&&"<ANONYMOUS>"
// // rest1.owner=rest1.owner&&"<ANONYMOUS>"

// rest1.owner&&="<ANONYMOUS>";
// rest2.owner&&="<ANONYMOUS>";


// console.log(rest1);
// console.log(rest2);
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests||10;
// console.log(guests);


// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// console.log(3||'Jonas');
// console.log(''||'Jonas');
// console.log(true||0);
// console.log(undefined||null);


// console.log(3&&'Jonas');
// console.log(''&&'Jonas');
// console.log(true&&0);
// console.log(undefined&&null);


// //SPREAD - on right side of =
// const arr = [1,2,...[3,4]];
// //REST - on left side of = 
// const [a,b,...others]= [1,2,3,4,5];

// console.log(a,b,others);

// const {sat,...weekdays}= restaurant.openingHours;
//  console.log(weekdays);

//  const add = function(...numbers){
//   let sum = 0;
//   for (let i = 0; i< numbers.length; i++)sum+=numbers[i];
//   console.log(sum);
//  };
// add(2,3);
// add(5,8,1,0,5);
// add(5,2,8,1,0,8,6)

// const x = [23,6,13];
// add(...x);

// restaurant.orderPizza('mushroom',"onion",'ham','tomato')

// const arr = [7,8,9];
// const badNewArr = [1,2,arr[0],arr[1],arr[2]];
// console.log(badNewArr);

// const newArr =[1,2,...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu,'Gnocci'];
// console.log(newMenu);

// //coppy array
// const mainMenuCopy =[...restaurant.mainMenu];

// //join 2 arrays
// const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

// const str ='Jonas';
// const letters =[...str,'','S.'];
// console.log(letters);

// //const ingredients =[prompt('Let\'s make pasta ! Ingredient 1?'),prompt('Ingredient 2?'),prompt('Ingredient 3?')]
// //console.log(ingredients);

// //restaurant.orderPasta(...ingredients)

// const newRestaurant = {foundedIn:1998,...restaurant,founder:'Giusepe'};
// console.log(newRestaurant);

// const restaurantCopy ={...restaurant};
// restaurantCopy.name = 'Ristorante Roma'

// const{name,openingHours,categories}=restaurant;
// console.log(name,openingHours,categories);

// const {name:restaurantName,openingHours:hours,categories:tags}=restaurant;
// console.log(restaurantName,hours,tags);

// const{menu =[],starterMenu:starters=[]}=restaurant;
// console.log(menu,starters);


// //Mutating variables
// let a =111;
// let b=999;
// const obj={a:23,b:7,c:14};
// ({a,b}=obj);
// console.log(a,b);

// //Nested objects
// const{fri:{open,close}}=openingHours;
// console.log(open,close);

// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z]=arr;
// console.log(x,y,z);

// let [main, ,secondary] =restaurant.categories;
// console.log(main,secondary);


// [main,secondary]=[secondary,main]

// console.log(main,secondary);

// const [starter, mainC] =restaurant.order(2,0);
// console.log(starter,mainC);

// //Nested Destructuring
// const nested =[2, 4, [5, 6]];
// // const [i, ,j] = nested;
// //console.log(i,j);
// const[i, ,[j,k]]=nested;
// console.log(i,j,k);

// //Default values
// const [p=1,q=1,r=1] = [8,9];
// console.log(p,q,r);