'use strict';


const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays =['mon','tue','wed','thu','fri','sat','sun'];

const   openingHours= {
 [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  order (starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]},

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    adress,
  }){
    console.log(`Order recieved! ${this.starterMenu[starterIndex] }and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}}`);
  },

  orderPasta (ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza(mainIngredient,...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// STRINGS - 3//

//SPIT AND JOIN//

//split STRING by character and create ARRAY with the split characters
console.log('a+very+nice+string'.split('+'));
console.log('Elena Cristescu'.split(' '));

const [firstName,lastName]='Elena Cristescu'.split(' ');

const newName = ['Ms.',firstName,lastName.toUpperCase()].join(' ');
console.log(newName);


const capitalizeName = function(name){
  const names = name.split(' ');
  const namesUpper = [];
  for(const n of names){
    // namesUpper.push(n[0].toUpperCase()+n.slice(1));
    namesUpper.push(n.replace(n[0],n[0].toUpperCase()))
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('elena cristescu');

//Padding
const message ='Go to gate 23!';
//STRING.padStart/padEnd(final char count, "Padding Character")
console.log(message.padStart(25,'+'));

const maskCreditCard = function(number){
  const str = number+'';
  const last = str.slice(-4);
  return last.padStart(str.length,"*")
}

console.log(maskCreditCard(981693636363635));
console.log(maskCreditCard('638758236172877'));

//Repeat
const message2 = 'Bad weather...All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function(n){
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)} `);
}
planesInLine(5);
planesInLine(3);
planesInLine(12);

// const airline = 'TAP Air Portugal';


// //STRINGS - 2//
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());


// //Fix capitalization error 
// const passenger = 'JoNAs'
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase()+passengerLower.slice(1);
// console.log(passengerCorrect);

// //Comparing email
// const email= 'hello@jonas.io';
// const loginEmail = '   Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// console.log(email===normalizedEmail);

// //replacing 
// const priceGB ='288,97£'
// const priceUS =priceGB.replace('£','$').replace(',','.');
// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
// console.log(announcement.replaceAll('door','gate'));

// //Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if(plane.startsWith('Airbus')&&plane.endsWith('neo')){
//   console.log('Part of the NEW Airbus Family!!!');
// };

// //Practice Exercise
// const checkBaggage = function(items){
//   const baggage = items.toLowerCase();
//   if(baggage.includes('knife')||baggage.includes('gun')){
//     console.log('You are NOT allowed on board!');
//   }else{
//     console.log('Welcome aboard!');
//   }

// }

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and a Camera');
// checkBaggage('Got some snacks and a gun');


//STRINGS - 1//
// //Accessing letters from the string
// console.log(plane[0]);
// console.log('B737'[0]);

// //Methods
// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// //SLICE Method 
// console.log(airline.slice(4));
// console.log(airline.slice(4,7));

// //Extracting first word
// console.log(airline.slice(0,airline.indexOf(" ")));
// //Extracting last word
// console.log(airline.slice(airline.lastIndexOf(" ")+1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1,-1));

// const checkMiddleSeat = function(seat){
// const s = seat.slice(-1);
// if (s ==='B'||s==='E')console.log('You got the middle seat :(');
// else console.log('You got lucky :D');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');





// // MAPS:ITERATION//

// const question = new Map ([
//   ['question','What is the best programming languare in the world?']
//   ,[1,'C']
//   ,[2,'Java']
//   ,[3,'JavaScript']
//   ,['correct',3]
//   ,[true,'Correct']
//   ,[false,'Try again!']
// ]);
// console.log(question);

// //Conver OBJECT to MAP 
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Looping MAPS
// console.log(question.get('question'));
// for(const [key,value] of question){
//   if(typeof key==='number')console.log(`Answer ${key}: ${value}`);
// };

// //const answer = Number(prompt('Your answer is ... '));
// const answer=3;
// //console.log(answer);

// console.log(question.get(answer===question.get('correct')));

// //Convert MAP to ARRAY 
// console.log([...question]);
// //console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// //MAPS// //
// const rest = new Map();
// rest.set('name','Classico Italiano');
// rest.set(1,'Fireze,Italy');
// console.log(rest.set(2,'Lisbon,Portugal'));

// //Seting multiple keys at a time 
// rest
// .set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open',11).set('close',23)
// .set(true,'We are open :D')
// .set(false,'We are closed :(');

// //Fetching a value using the key
// console.log(rest.get('name'));
// console.log(rest.get(true));


// //Example of using booleans as match keys
// const time = 21;
// console.log(rest.get(time>rest.get('open')&&time<rest.get('close')));

// //Methods
// console.log(rest.has('categories'));
// rest.delete(2);
// //rest.clear();
// console.log(rest);
// console.log(rest.size);

// //Using ARRAYS as match keys
// const arr =[1,2]
// rest.set(arr,'Test')
// rest.set(document.querySelector('h1'),'Heading')
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));






// //SETS

// const ordersSet = new Set(['Pasta','Pizza','Risotto','Pasta','Pizza']);
// console.log(ordersSet);

// console.log(new Set('Elena'));

// //METHODS
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet);

// for(const order of ordersSet)console.log(order);

// //Example

// //Make an array with only the unique positions
// const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// //How many unique positions
// console.log(new Set(['Waiter','Chef','Waiter','Manager','Chef','Waiter']).size);

// //How many different letters are in a string 
// console.log(new Set('elenacristescu').size);

// //property NAMES
// const propreties = Object.keys(openingHours);
// console.log(propreties);

// let operStr = `We are open on ${propreties.length} days:`
// for (const day of propreties){
//   operStr+=`${day}, `;
// }
// console.log(operStr);

// //property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// //Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for(const [key,{open,close}] of entries){
//   console.log(`On ${key} we open at ${open} and close at ${close}.`);
// }

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// //with OPTIONAL CHAINING
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// //EXAMPLE
// const days =['mon','tue','wed','thu','fri','sat','sun'];

// for(const day of days){
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// //Methods
// console.log(restaurant.order?.(0,1)??'Method does not exist');
// console.log(restaurant.orderRisoto?.(0,1)??'Method does not exist');

// //Arrays
// const users = [{name:"Jonas",email:'hello@jonas.io'}];
// console.log(users[0].name??'User array empty');

// const rest1 ={
//   name:'Capri',
//   //numGuests:20,
//   numGuests:0,
// };

// const rest2 ={
//   name:'La Piazza',
// owner :'Giovanni Rozzi',
// };

// const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

// for(const item of menu) console.log(item);

// for (const [i,el] of menu.entries()){
//   console.log(`${i+1}:${el}`);
// }

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