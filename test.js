// let a = 3

// function carre(longeur, largeur){
//     console.log("* * * * * *")
//     console.log("*         *")
//     console.log("*         *")
//     console.log("*         *")
//     console.log("*         *")
//     console.log("* * * * * *")
// }

// function multiplication(nombre, coeficition)
// {

//     return nombre * coeficition;
// }

// function division(nombre, coeffition)
// {

//     if ( coeffition <=  0 && coeffition >= 2 ||coeffition >= 5 && coeffition<  10 )
//     {
    
//         return nombre / coeffition;

//         return console.log("on ne peut pas diviser par 0")
//     }   


// }

// function table_de_multiplication(x){
//     let i =0
//     for (let index = 0; index < 10; index++) {
//        console.log(multiplication(x,index))
//     }

// }
// function afficher_toto()
// {
//    console.log("toto")
// }

// data = [];
// data1 =  [1,2,3,4];

// for (let index = 0; index < data1.length ; index++) {
//    console.log(data1[index])
    
// }





data2= [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]

User = {
    name : "tata",
    age : 20,
    friends: ["toto","titi","tutu"],

    multiplication : multiplication
       
}


  function multiplication ( nombre , coeficition)
{
    return nombre * coeficition;
}


 function division ( nombre , coeficition)
{
    return nombre * coeficition;
}
 function soustraction ( nombre , coeficition)
{
    return nombre - coeficition;
}

module.exports = { data2 ,multiplication }