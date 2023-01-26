// when window loaded this event listner run
window.addEventListener("load", async () => {
    // get tag with id "shop_cards"
    const cardProducts = document.querySelector("#shop_cards");

    const spiner = `
    <section class="my-4">
        <button class="btn btn-primary px-3" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            <span class="m-4">Loading Products ...</span>
        </button>
    </section>
    `;

    cardProducts.innerHTML = spiner;

    // defiend variable
    let notValid = false;
    let fetchData;
    let response;
    let products;

    try {
        // fetch data from server
        fetchData = await fetch("https://dummyjson.com/products");
        // parse data to json
        response = await fetchData.json();
        products = response.products;
        if (fetchData.status != 200) {
            throw new Error();
        }
    } catch (error) {
        notValid = true;
    }

    setTimeout(() => {
        cardProducts.innerHTML = "";

        if (notValid) {
            cardProducts.innerHTML = ` 
                <div class="text-light bg-danger text-capitalize text-center col-12 py-2 px-4">
                    <i class="bi mx-2 bi-info-circle-fill"></i>
                        sorry !! <br>some problem to get data from server ......):
                    </div>
            `;
            return;
        }

        // show data on the page
        // loop on prducts
        products.forEach((product) => {
            const card = `
            <section class="shop_card card my-3" id="${product.id}">
            <img src="${product.thumbnail}"
                class="shop_card-img mx-2 card-img-top" alt="iphone">
            <div class="card-body">
            <h5 class="text-center text-capitalize text-nowrap my-3 overflow-hidden">
            ${product.title}
            </h5>
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <span class="badge bg-secondary">${product.brand}</span>
                    <span class="badge bg-danger">${product.category}</span>
                </div>
            </div>
            <section class="border-top border-primary d-flex py-2 justify-content-around align-items-center">
                <span class="text-secondary">Price $${product.price}</span>
                <div class="ratings">
                    <i class="bi bi-star-half raitingColor"></i>
                    <i class="bi bi-star-half raitingColor"></i>
                    <i class="bi bi-star-half raitingColor"></i>
                    <i class="bi bi-star-half"></i>
                    <i class="bi bi-star-half"></i>
                </div>
            </section>
    
            <section class="d-flex flex-column justify-content-between align-items-center content-show">
                <p class="text-light px-3 mt-5 text-center">${product.description}</p>
                <p class="shop-basket border-top text-center border-warning p-1">
                    <a href="#">
                        <small class="badge bg-success">Buy</small>
                        <img src="Assets/icons/basketIcon.png" alt="basket icon"> 
                        <span class="badge bg-danger">${product.stock}</span>
                    </a>
                </p>
            </section>
        </section>`;
            cardProducts.innerHTML += card;
        });
    }, 3000);
});
