function total (){

var total=0;
var groceryList = [
  "milk: ", "cereal: ", "tuna: ", "mayo: "
];

var groceryPrice = [
  1.30,2.30,6.50,3
];

for (var i = 0; i < groceryList.length ; i++ ){
  console.log(groceryList[i] + groceryPrice[i]);
}

for (var i=0; i<groceryPrice.length; i++) {
  total = total + groceryPrice[i];
}

console.log("total: "+total);

}

total();
