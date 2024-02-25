//EJERCICIO EN GRUPO
//Gema Millán
//Rafael Lasso de la Vega


//EJERCICIO 1 - MAP
let numbers = [4, 5, 6, 7, 8, 9, 10];

function elevados() {
    return numbers.map(item => item ** item);
}

//EJERCICIO 2 - MAP

let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

let result2 = foodList.map((comida, i) => {
    let pais = ['Italia', 'Japon', 'Valencia'];

    if (i <= 2) {
        return `Como soy de ${pais[i]}, amo comer ${comida}`;
    } else {
        return `Aunque no como carne, el ${comida} es sabroso`;
    }

})
console.log(result2);

// EJERCICIO 3 - MAP

const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];

//Solucion Optima
let result3 = staff.map(personas => `${personas.name} es ${personas.role} y le gusta ${personas.hobbies[0]} y ${personas.hobbies[1]}`);

//Otra solucion
//let result3 = staff.map(item => item.name + " es " + item.role + " y le gusta " + item.hobbies[0] + " y " + item.hobbies[1]);

// Resultado esperado
/*
  [
    'Pepe es The Boss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/

//EJERCICIO 4 - FILTER

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result4 = numbers2.filter(impar => impar % 2 !== 0);
console.log(result4);

//EJERCICIO 5 - FILTER

const foodList2 = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }];

let result5=foodList2.filter(function(food){return food.isVeggie==true;})
console.log(result5);

/*result5="Que rico "+result5.name[0] +" me voy a comer!","Que rica "+result5.name[1]+" me voy a comer!";*/

//EJERCICIO 6 - FILTER

const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    },
  ];
  
  /*
    [
      'TV Samsung,',
      'Viaje a Cancún'
    ]
  */

    let result6 = inventory.filter(trasto => trasto.price > 300);
    console.log(result6);

    //EJERCICIO 7 - REDUCE

    const numeros3=[39, 2, 4, 25, 62];
    let result7= numeros3.reduce(multiplica => multiplica * 2);
    console.log(result7);

    //EJERCICIO 8 - REDUCE

    const sentenceElements = [
        'Me',
        'llamo',
        /* Tu nombre aqui! */,
        'y',
        'quiero',
        'sentir',
        'la',
        'fuerza',
        'con',
        'javascript'
      ];
      
      // Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
     /* let result8=sentenceElements.reduce(unir => unir+=); */

    //EJERCICIO 8 BIS - REDUCE

    const books = [
        {
          name: ' JS for dummies',
          author: 'Emily A. Vander Veer',
          price: 20,
          category: 'code'
        },
        {
          name: 'Don Quijote de la Mancha',
          author: 'Cervantes',
          price: 14,
          category: 'novel'
        },
        {
          name: 'Juego de tronos',
          author: 'George R. Martin',
          price: 32,
          category: 'Fantasy'
        },
        {
          name: 'javascript the good parts',
          author: 'Douglas Crockford',
          price: 40,
          category: 'code'
        }
      ];
      // Resultado --> 60



