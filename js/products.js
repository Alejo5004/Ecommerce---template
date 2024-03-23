let categories = [
    {
        image: '',
        category: 'Accesorios'
    },
    {
        image: '',
        category: 'Componentes'
    },
    {
        image: '',
        category: 'Consolas'
    },
];

let products = [
    {
        category: 'Audífonos',
        offer: true,
        product: 'Audífonos gamer inalámbricos HyperX Cloud Flight HX-HSCF negro con luz rojo LED',
        images: [
            'https://http2.mlstatic.com/D_NQ_NP_675916-MLA40762447172_022020-O.webp'
        ],
        score: '4.5',
        price: 100000,
        description: 'N/A',
    },
];

let discont = 15;


let productElement = document.getElementById('products');
products.forEach(element => {
    let priceNormal = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(element.price);
    let priceDiscont = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(element.price - element.price * discont / 100)
    let price = element.offer ? `<del>${priceNormal}</del> ${priceDiscont}` : priceNormal;

    productElement.innerHTML += `
        <article class="card-product">
            <figure>
                <img src="${element.images[0]}" />
            </figure>
            <span>${element.score}</span>
            <h3>${element.product}</h3>
            <h4>${price}</del></h4>
        </article>
    `;
});