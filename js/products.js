let products = [
    {
        category: 'accesory',
        offer: true,
        product: 'HyperX Cloud Flight HX-HSCF',
        images: [
            './image/products/audifono1.webp'
        ],
        score: Math.floor(Math.random() * (3 - 5) + 5),
        price: 399900,
        description: 'N/A',
    },
    {
        category: 'accesory',
        offer: true,
        product: 'Logitech G305 Lightspeed, Mouse Gamer Inalámbrico',
        images: [
            './image/products/mouse1.webp'
        ],
        score: Math.floor(Math.random() * (3 - 5) + 5),
        price: 175500,
        description: 'N/A',
    },
    {
        category: 'accesory',
        offer: false,
        product: 'Redragon Kumara K552',
        images: [
            './image/products/teclado1.webp'
        ],
        score: Math.floor(Math.random() * (3 - 5) + 5),
        price: 219300,
        description: 'N/A',
    },
    {
        category: 'accesory',
        offer: true,
        product: 'LG 32UN550 31.5" Panel VA',
        images: [
            './image/products/pantalla1.webp'
        ],
        score: Math.floor(Math.random() * (3 - 5) + 5),
        price: 2011300,
        description: 'N/A',
    },
    {
        category: 'console',
        offer: false,
        product: 'Nintendo Switch Oled 64gb Standard',
        images: [
            './image/products/switch1.webp'
        ],
        score: Math.floor(Math.random() * (3 - 5) + 5),
        price: 1228900,
        description: 'N/A',
    },
    {
        category: 'console',
        offer: true,
        product: 'Xbox Series S 1TB Standard',
        images: [
            './image/products/xbox1.webp'
        ],
        score: Math.floor(Math.random() * (3 - 5) + 5),
        price: 2284900,
        description: 'N/A',
    },
    {
        category: 'console',
        offer: true,
        product: 'Sony Playstation 5 Slim',
        images: [
            './image/products/paly1.webp'
        ],
        score: Math.floor(Math.random() * (3 - 5) + 5),
        price: 2284900,
        description: 'N/A',
    },
    {
        category: 'pc',
        offer: true,
        product: 'Epic-x Geforce Rtx 4080 Super 16gb',
        images: [
            './image/products/grafica1.webp'
        ],
        score: Math.floor(Math.random() * (3 - 5) + 5),
        price: 5199000,
        description: 'N/A',
    },
    {
        category: 'pc',
        offer: true,
        product: 'Gpu Gamer Rx6600 Gddr6 8gb',
        images: [
            './image/products/grafica2.webp'
        ],
        score: Math.floor(Math.random() * (3 - 5) + 5),
        price: 2199000,
        description: 'N/A',
    },
    {
        category: 'pc',
        offer: true,
        product: 'Tarjeta Gráfica Zotac Gaming Rtx 3080 Ti',
        images: [
            './image/products/grafica3.webp'
        ],
        score: Math.floor(Math.random() * (3 - 5) + 5),
        price: 2199000,
        description: 'N/A',
    },
    {
        category: 'pc',
        offer: true,
        product: 'Placa Madre Gigabyte H510m-h',
        images: [
            './image/products/board1.webp'
        ],
        score: Math.floor(Math.random() * (3 - 5) + 5),
        price: 415000,
        description: 'N/A',
    },
    {
        category: 'pc',
        offer: true,
        product: 'Procesador gamer AMD Ryzen 7 5700X',
        images: [
            './image/products/procesador1.webp'
        ],
        score: Math.floor(Math.random() * (3 - 5) + 5),
        price: 800000,
        description: 'N/A',
    },
    {
        category: 'pc',
        offer: true,
        product: 'Disipador Rgb Intel Y Amd 6',
        images: [
            './image/products/disipador.webp'
        ],
        score: Math.floor(Math.random() * (3 - 5) + 5),
        price: 120000,
        description: 'N/A',
    },
    {
        category: 'pc',
        offer: false,
        product: 'Chasis Thermaltake View 200 Black Vidrio Templado',
        images: [
            './image/products/gabinete1.webp'
        ],
        score: Math.floor(Math.random() * (3 - 5) + 5),
        price: 200000,
        description: 'N/A',
    },
    {
        category: 'pc',
        offer: true,
        product: 'Procesador AMD Ryzen 9 7950X',
        images: [
            './image/products/procesador2.webp'
        ],
        score: Math.floor(Math.random() * (3 - 5) + 5),
        price: 2500000,
        description: 'N/A',
    },

];

let discont = 50;

let productElement = document.getElementById('products');
products.forEach(element => {
    let priceNormal = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(element.price);
    let priceDiscont = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(element.price - element.price * discont / 100)
    let price = element.offer ? `<del class="price-offer">${priceNormal}</del> ${priceDiscont}` : priceNormal;

    productElement.innerHTML += `
        <article class="card">
            <figure class="card-img">
                <img src="${element.images[0]}" />
            </figure>
            <div class="card-content">
                <h3 class="card-title">${element.product}</h3>
                <div class="card-description">
                    <p>
                        <span class="score">
                            <i class="fa-solid fa-star"></i> ${element.score}
                        </span>
                        <br>
                        <span class="price">${price}</span>
                    </p>
                    <div>
                        <button class="btn-buy">Comprar</button>
                    </div>
                </div>
            </div>
        </article>
    `;
});