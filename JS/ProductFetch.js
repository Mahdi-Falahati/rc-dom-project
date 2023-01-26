// when window loaded this event listner run
window.addEventListener("load", async () => {
    // fetch data from server
    const fetchData = await fetch("https://dummyjson.com/products");
    // parse data to json
    const response = await fetchData.json();
    const products = response.products;

    const cardProducts = document.querySelector("#shop_cards");
    // show data on the page
    products.forEach((product) => {
        const card = `
        <section class="shop_card card my-3" id="${product.id}">
        <img src="${product.thumbnail}"
            class="shop_card-img mx-2 card-img-top" alt="iphone">
        <div class="card-body">
        <h5 class="text-center text-capitalize text-nowrap overflow-hidden">${product.title}</h3>
            <div class="d-flex flex-row justify-content-between align-items-center">
                <span class="badge bg-secondary">${product.brand}</span>
                <span class="badge bg-danger">${product.category}</span>
            </div>
        </div>
        <section class="border-top border-primary d-flex py-2 justify-content-around align-items-center">
            <span>Price : ${product.price} $</span>
            <div class="ratings">
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
            </div>
        </section>

        <section class="d-flex flex-column justify-content-between align-items-center content-show">
            <p class="text-light px-3 mt-5 text-center">${product.description}</p>
            <p class="shop-basket border-top text-center border-warning p-1">
                <a href="#">
                    <small class="badge bg-success">Buy</small>
                    <img src="Assets/icons/basketIcon.png" alt="basket icon"> 
                </a>
            </p>
        </section>
    </section>`;
        cardProducts.innerHTML +=card;
    });
});
