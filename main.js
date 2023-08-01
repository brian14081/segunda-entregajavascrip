const juego = function(nombre,precio,stock){
    this.nombre=nombre;
    this.precio=precio;
    this.stock=stock;
}

let producto1 = new Producto("DOOM", 60, 999)
let producto2 = new Producto("SPIDERMAN", 12000, 999)
let producto3 = new Producto("ELDEN RING", 11000, 999)
let producto4 = new Producto("MINECRAFT", 800, 999)
let producto5 = new Producto("minecraft",50,2)

let lista = [producto1,producto2,producto3,producto4,producto5]

function filtrarProductos(){
    let palabraClave = prompt("ingresa el juego que queres buscar")
    let resultado = lista.filter((producto)=> producto.nombre.includes(palabraClave))

    if(resultado.length > 0){
        console.table(resultado)

    }else{
        alert("no se encontro ninguna coincidencia con:" +  palabraClave)
    }
}