//Ejercicio 3

/*Dado un arreglo de objetos como parámetro de una función, conteniendo la categoría 
y precio del producto, retornar el precio total de una categoría indicada.

Hint: Usar los métodos .filter() y .reduce() para lograr el resultado.

totalByCategory(inventory, "beverage");

debe mostrar en cosola: 120

totalByCategory(inventory, "no-existe");

debe mostrar en cosola: 0

*/ 

//Creo un constructor
const Item = function (name, category , price){
    this.name = name;
    this.category = category;
    this.price = price;
}


//creo items tipo objeto con el constructor
const item_1 = new Item('tea', 'beverage' , 40);
const item_2 = new Item('soda', 'beverage' , 30);
const item_3 = new Item('beer', 'beverage' , 50);
const item_4 = new Item('spaghetti', 'meal' , 100);
const item_5 = new Item('chicken', 'meal' , 80);
const item_6 = new Item('salad', 'meal' , 30);
const item_7 = new Item('ice-cream', 'dessert' , 60);
const item_8 = new Item('cake', 'dessert' , 100);

//los meto dentro de un arreglo
const inventory = [item_1,item_2,item_3,item_4,item_5,item_6,item_7,item_8];

//Creo una funncion eque toma como argumentos el arreglo anterior y un string en el que le paso la categoria
const totalByCategory = function (inventory , category) {

    //filtro el array
    let filtered = inventory.filter(item => item['category'] === category);

    //el metodo .lenght no funciona directamente sobre filtered porque este devuelve un objeto
    if (Object.keys(filtered).length !== 0){//si hay mas de una coincidencia entra en el bloque

        console.log(`los items de la categoria ${category} son los siguientes :`);

        filtered.forEach(element => {
            console.log(element.name);
        });

        let filteredPrices = []; //creo un array para meter los precios

        //paso el valor de cada propiedad price de cada item al array
        filtered.forEach(element => {
            
            filteredPrices.push(element.price);
            
        });

        //utilizo este array para obtener la sumatoria de todo con el metodo reduce
        let reduced = filteredPrices.reduce((accumulator, currentValue) => accumulator + currentValue );
        console.log(`el total por categoria ${category} es : ${reduced}`);

    } else

    //en el caso de que no haya coincidencia imprimo esto
    console.log(`No hubo coincidencia 
El total de la categoria ${category} es ${Object.keys(filtered).length}:`);
    
};

totalByCategory(inventory , 'beverage');