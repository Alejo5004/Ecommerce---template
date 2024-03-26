let products = [
    {
        category: 'Audífonos',
        offer: true,
        product: 'HyperX Cloud Flight HX-HSCF',
        images: [
            'https://http2.mlstatic.com/D_NQ_NP_675916-MLA40762447172_022020-O.webp'
        ],
        score: '4.5',
        price: 100000,
        description: 'N/A',
    },
    {
        category: 'Audífonos',
        offer: true,
        product: 'HyperX Cloud Flight HX-HSCF',
        images: [
            'https://http2.mlstatic.com/D_NQ_NP_946238-MLU72569163450_112023-O.webp'
        ],
        score: '4.5',
        price: 100000,
        description: 'N/A',
    },
    {
        category: 'Audífonos',
        offer: true,
        product: 'HyperX Cloud Flight HX-HSCF',
        images: [
            'https://http2.mlstatic.com/D_NQ_NP_705617-MLU73117640700_122023-O.webp'
        ],
        score: '4.5',
        price: 100000,
        description: 'N/A',
    },
    {
        category: 'Audífonos',
        offer: false,
        product: 'HyperX Cloud Flight HX-HSCF',
        images: [
            'https://http2.mlstatic.com/D_NQ_NP_675916-MLA40762447172_022020-O.webp'
        ],
        score: '4.5',
        price: 100000,
        description: 'N/A',
    },
    {
        category: 'Audífonos',
        offer: false,
        product: 'HyperX Cloud Flight HX-HSCF',
        images: [
            'https://http2.mlstatic.com/D_NQ_NP_675916-MLA40762447172_022020-O.webp'
        ],
        score: '4.5',
        price: 100000,
        description: 'N/A',
    },
    {
        category: 'Audífonos',
        offer: true,
        product: 'HyperX Cloud Flight HX-HSCF',
        images: [
            'https://http2.mlstatic.com/D_NQ_NP_675916-MLA40762447172_022020-O.webp'
        ],
        score: '4.5',
        price: 100000,
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
                    <span class="score">
                        <i class="fa-solid fa-star"></i> ${element.score}
                    </span>
                    <br>
                    <span class="price">${price}</span>
                    <div>
                        <button class="btn-cart">Añadir al carro</button>
                        <button class="btn-buy">Comprar</button>
                    </div>
                </div>
            </div>
        </article>
    `;
});