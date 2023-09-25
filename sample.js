const sample = require('./food.json');
// List all the food items
let all = sample.map((items)=>{
    return items;
});
console.log(all);
//list all the food items with category vegetables
let veg = sample.filter((items) => {
    if(items.category === "Vegetable"){
    return items.foodname;
    }
});
console.log(veg);
//list all the food items with category fruit
let fruit = sample.filter((items)=>{
    if(items.category === "Fruit")
    return items.foodname;
});
console.log(fruit);
//list all the food items with category protein
let protein = sample.filter((items)=>{
    if(items.category === "Protein")
    return items.foodname;
});
console.log(protein);
//list all the food items with category nuts
let nut = sample.filter((items)=>{
    if(items.category === "Nuts")
    return items.foodname;
});
console.log(nut);
//list all the food items with category grains
let grain = sample.filter((items)=>{
    if(items.category === "Grain")
    return items.foodname;
});
console.log(grain);
//list all the food items with category dairy
let dairy = sample.filter((items)=>{
    if(items.category === "Dairy")
    return items.foodname;
});
console.log(dairy);
//list all the food items with calorie above 100
let cal1 = sample.filter((items)=>{
    if(items.calorie > 100)
    return items.foodname;
});
console.log(cal1);
//list all the food items with calorie below 100
let cal2 = sample.filter((items)=>{
    if(items.calorie < 100)
    return items.foodname;
}) ;
console.log(cal2);
//list all the food items with highest protien content to lowest
let list1 = sample.sort((a,b)=> {
   return b.protiens - a.protiens;
});
console.log(list1);
//list all the food items with lowest cab content to highest
let list2 = sample.sort((a,b)=>{
    return a.cab - b.cab;
});
console.log(list2);
