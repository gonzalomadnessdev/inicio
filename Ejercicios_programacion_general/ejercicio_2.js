//Ejercicio 2

//Crear una función que reciba como parámetro un arreglo de números y retornar en la consola 
//los elementos elevados al cuadrado solo si se cumple que el número es positivo.

squareOfPositive  = (arr)=>{

    // arr.map(
    //     function (x){
    //         if(x>0){
    //             console.log(x*x);
    //         }else console.log(x);
    //     }

    // )

    arr.map((x)=>{if(x>0){console.log(x*x)}else console.log(x);});
}

let arr_1=[2, 4, 6], arr_2=[-3, 2, -8, 12, 5] , arr_3=[1, 2, 3, 4, 5];

squareOfPositive(arr_3);
