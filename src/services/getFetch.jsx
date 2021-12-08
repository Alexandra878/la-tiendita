const products = [
    
    { id:"1", 
    title:"Paisaje", 
    tipo: "Pintura",
    price:1000, 
    description: "Paisaje con colores",
    imageUrl:"../assets/cuadro1.jpg", 
    stock:5 },

    { id:"2", 
    title:"Atardecer", 
    tipo: "Arte",
    price:500, 
    description:"Persona caminando por la playa",
    imageUrl:"../assets/cuadro 2.jpg", 
    stock:7 },

    { id:"3", 
    title:"Leon", 
    tipo: "Tres cuadros",
    price:200, 
    description:"Fotografia",
    imageUrl:"../assets/cuadro 3.jpg", 
    stock:10 },

    { id:"4", 
    title:"Mariposa", 
    tipo: "infantil",
    price: 1490, 
    description:"Ideal para dormitorio infantil",
    imageUrl:"../assets/cuadro 4.jpg", 
    stock:10 },

    { id:"5", 
    title:"Arbol", 
    tipo: "Pintura",
    price: 1690, 
    description:"Arbol arcoiris",
    imageUrl:"../assets/cuadro 5.jpg", 
    stock:10 },

    { id:"6", 
    title:"Lluvia", 
    tipo: "pintura",
    price: 119, 
    description:"lluvia en el parque.",
    imageUrl:"../assets/cuadro 6.jpg", 
    stock:10 },


];

const getFetch = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(products)
    }, 2000)
})

export default getFetch