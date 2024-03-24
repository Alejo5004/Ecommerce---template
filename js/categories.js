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

let categoryElement = document.getElementById('categories');
categories.forEach(element => {
    categoryElement.innerHTML += `
        <article class="card-category">
            <figure>
                <img src="${element.image}" />
            </figure>
            <h3>${element.category}</h3>
        </article>
    `;
});