//Métodos reduce, map, filter y find


/*
Dada la siguiente colección
*/

const items = [

  { description: 'Tomates', quantity: 1, price: 3, total: 55 },

  { description: 'Cebolla', quantity: 3, price: 5, total: 5.5 },

  { description: 'Zanahoria', quantity: 2, price: 6, total: 17 },

  { description: 'Zapallo', quantity: 2, price: 9, total: 17 }

];

/*
Mostrar total de items
Mostrar precio sumado de todos los ítems
Mostrar sólo los ítems que contengan la property quantity igual a 2
Mostrar un ítem con quantity igual a 3

Dada la siguiente colección:

*/

// console.log(items.map(x=>x)); 

//Mostrar total de items
console.log(`Total de items : ${items.length}`); 


//Mostrar precio sumado de todos los ítems
console.log(items.reduce((a,b)=>({price :a.price + b.price})));//retorna un objeto para poder seguir iterando
//https://stackoverflow.com/questions/5732043/javascript-reduce-on-array-of-objects


//Mostrar sólo los ítems que contengan la property quantity igual a 2
console.log(items.filter(el => el.quantity == 2).map(x=>x));

//Mostrar un ítem con quantity igual a 3
console.log(items.find(function(a){
    return a.quantity==3; //Lo hice asi para demostrar que se puede pasar con function 
}));


/*
Agrupar personas por edad, de manera que el resultado muestre { 29: 3, 59: 2 }
Mostrar la primer persona de 29 años
Mostrar solo las personas con edad 59
*/ 



const persons = [

  { name: 'Maria', age: 59 },

  { name: 'Juan', age: 29 },

  { name: 'Pedro', age: 29 },

  { name: 'Pedro', age: 59 },

  { name: 'Pedro', age: 29 }

];



// console.log(persons.filter(el=>el.age == 29).length);
// console.log(persons.filter(el=>el.age == 59).length);


//Agrupar personas por edad, de manera que el resultado muestre { 29: 3, 59: 2 }
const groupByAge = {29: persons.filter(el=>el.age == 29).length, 
                    59: persons.filter(el=>el.age == 59).length};

console.log(groupByAge);

//Mostrar la primer persona de 29 años
console.log(persons.find(el=>el.age == 29).name);

//Mostrar solo las personas con edad 59
console.log(persons.filter(el=>el.age == 59).map(el=>el.name));


//BONUS

class Item {
    constructor(items,quantityToCompare){
        this._items = items;
        this._quantityToCompare = quantityToCompare;
    }
    get items(){
        return this._items;
    }
    get quantityToCompare(){
        return this._quantityToCompare;
    }
    set items(newItems){
        this._items = newItems;
    }
    set quantityToCompare(newQuantityToCompare){
        this._quantityToCompare = newQuantityToCompare;
    }

    getItemsByQuantity(){
        console.log(this._items.filter(el => el.quantity == this._quantityToCompare).map(x=>x));
    }
}

const itemObj = new Item(items);
itemObj.quantityToCompare = 2;

itemObj.getItemsByQuantity();