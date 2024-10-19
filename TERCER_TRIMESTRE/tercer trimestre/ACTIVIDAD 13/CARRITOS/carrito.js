document.addEventListener('DOMContentLoaded', () => {

    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Piña',
            precio: 2000,
            imagen: 'piña.jpg'
        },
        {
            id: 2,
            nombre: 'Sandia',
            precio: 2500,
            imagen: 'sandia.jpg'
        },
        {
            id: 3,
            nombre: 'Mandarina',
            precio: 2000,
            imagen: 'mandarina.jpg'
        },
        {
            id: 4,
            nombre: 'Fresas',
            precio: 3000,
            imagen: 'fresas.jpg'
        },
        {
            id: 5,
            nombre: 'Banano',
            precio: 2500 ,
            imagen: 'banano.jpg'
        }
        ,
        {
            id: 6,
            nombre: 'Manzana',
            precio: 3500 ,
            imagen: 'manzana.jpg'
        },
        {
            id: 7,
            nombre: 'Mango',
            precio: 2000,
            imagen: 'mango.jpg'
        },
        {
            id: 8,
            nombre: 'Pera',
            precio: 3000,
            imagen: 'pera.jpg'
        },
        {
            id: 9,
            nombre: 'Naranja',
            precio: 3000,
            imagen: 'naranja.jpg'
        },
        {
            id: 10,
            nombre: 'Guayaba',
            precio: 3500,
            imagen: 'guayaba.jpg'
        },
        {
            id: 11,
            nombre: 'Melon',
            precio: 4000,
            imagen: 'melon.jpg'
        },
        {
            id: 12,
            nombre: 'Mamonsillo',
            precio: 1500,
            imagen: 'mamon.jpg'
        }
        
        
        
        
        
        
        
        
        

    ];

    let carrito = [];
    const divisa = 'COP';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#vaciar');
    const miLocalStorage = window.localStorage;


    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            
            const miNodo = document.createElement('div');
            miNodo.classList.add('gol', 'col-sm-4');
          
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('gol-body');
            
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('gol-title');
            miNodoTitle.textContent = info.nombre;
           
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('imagen');
            miNodoImagen.setAttribute('src', info.imagen);
            
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('gol-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'carritoFruta');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    function anyadirProductoAlCarrito(evento) {
        
        carrito.push(evento.target.getAttribute('marcador'))
        
        renderizarCarrito();
        
        guardarCarritoEnLocalStorage();
    }

    function renderizarCarrito() {
        
        DOMcarrito.textContent = '';
        
        const carritoSinDuplicados = [...new Set(carrito)];
        
        carritoSinDuplicados.forEach((item) => {
            
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                
                return itemBaseDatos.id === parseInt(item);
            });
            
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                
                return itemId === item ? total += 1 : total;
            }, 0);
            
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        
        DOMtotal.textContent = calcularTotal();
    }

    
    function borrarItemCarrito(evento) {
        
        const id = evento.target.dataset.item;
        
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        
        renderizarCarrito();
        
        guardarCarritoEnLocalStorage();

    }

    function calcularTotal() {
        
        return carrito.reduce((total, item) => {
            
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    function vaciarCarrito() {
        
        carrito = [];
        
        renderizarCarrito();
        
        localStorage.clear();

    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        
        if (miLocalStorage.getItem('carrito') !== null) {
            
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

   
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});
