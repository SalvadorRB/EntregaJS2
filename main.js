const  pizzas = [
    {
    id : 1,
    nombre : "pizza de Palmito",
    precio : 750,
    ingredientes : ["palmito", "muzzarella", "salsa"],
    
},

{
    id : 2,
    nombre : "pizza Napolitana",
    precio : 575,
    ingredientes : ["tomate", "muzzarella", "ajo", "oregano"],
   
},

{
    id : 3,
    nombre: "pizaa Roquefort",
    precio : 450,
    ingredientes : ["roquefort", "muzzarella", "jamon", "salsa"],
   
},
{
    id : 4,
    nombre: ' pizza Cuatro Quesos',
    precio : 1250,
    ingredientes : ["proquefort", "muzzarella", "provolone", "chedar", "jamon"],
    
},
{
    id : 5,
    nombre: "pizza Vegana",
    precio : 750,
    ingredientes : ["vegetales", "muzzarella", "salsa", "oregano"],
   
},
{
    id : 6,
    nombre: "pizza super",
    precio : 750,
    ingredientes : ["huevo frito", "muzzarella", "jamon", "papas fritas"],
    
},
];

// a) las pizzas que tengan un id impar


const pizzasImpares = pizzas.filter(pizza => pizza.id % 2 !==0);
pizzasImpares.forEach((pizza) => 
    console.log( `La ${pizza.nombre} tiene un id impar`)
);


// b) ¿ hay alguna pizza que valga menos de $600?

const precioMenorA600 = (pizza) => pizza.precio < 600;

if(pizzas.some(precioMenorA600)){
    console.log("Hay pizzas con precio menor a $600");
}
else{
    console.log("No Hay pizzas con precio menor a $600");
}

// c) el nombre de cada pizza con su respectivo precio

pizzas.forEach(pizza => console.log(`veni a probar nuestra ${pizza.nombre} por tan solo $${pizza.precio}`)
);

// d) Todos los ingredientes de cada pizza(en cada interacion imprimir los ingredientes de la pizza actual)

pizzas.forEach(pizza =>{ console.log(`Los ingredientes de la ${pizza.nombre} son:`);
pizza.ingredientes.forEach(ingredientes => console.log(ingredientes));
} )


const h2 = document.getElementById('pizzaName')
const h4 = document.getElementById('pizzaPrice')
const input = document.querySelector('input')
const button = document.getElementById('enviar')
const allContainer = document.getElementById("allContainer");
button.addEventListener("click", enviarNumber);

function enviarNumber(e) {
    e.preventDefault();
    const pizzaId = parseInt(input.value);
    if (pizzaId <= 0 || pizzaId > pizzas.length) {
        error("El número debe ser entre 1 y 6");
        reset();
        return;
    }
    if (!pizzaId) {
        error("Por favor, ingrese un número del 1 al 6");
        reset();
        return;
    }
    const res = pizzas.find((pizza) => pizza.id === pizzaId);
    render(res);
}


const error = (message) => {
    const lastError = document.querySelector(".m-auto");
    if (!lastError) {
        const errorContainer = document.createElement("div");
        errorContainer.classList.add("align-text", "m-auto");
        errorContainer.innerHTML = `
    <p class="error">${message}</p>
    `;
        allContainer.appendChild(errorContainer);
        setTimeout(() => {
            errorContainer.remove();
        }, 5000);
    }
};


const render = (pizza) => {
    const { nombre, precio } = pizza;
    h2.innerHTML = `<span class= "small">Usted eligió: </span>${nombre}`;
    h3.innerHTML = `<span class= "small">El precio es de: </span>${precio}`;
}


const reset = () => {
    h2.innerHTML = "";
    h3.innerHTML = "";
};
