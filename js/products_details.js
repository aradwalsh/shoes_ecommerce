const getProducts_details = async () => {
    const res = await fetch("products_detail.json");
    const data = await res.json();
    const products = data.products_detail_json;
    return products;
};

//Display Products

const displayProducts = (products_detail_json, center) => {
    let display = products_detail_json.map(
        ({ title, image, price }) =>

  `<div class="product">
       
        <div class="product-header">
            <img src=${image} alt="product">
        </div>

        <div class="product-footer">
            <h3>${title}</h3>

            <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bx-star"></i>
            </div>

            <div class="product-price">
            <h4>$${price}</h4>
            </div>

        </div>

        <ul>
            <li>
            <a href="product-details.html">
            <i class="far fa-eye"></i>
            </a>
            </li>

            <li>
            <a href="#">
            <i class="far fa-heart"></i>
            </a>
            </li>

            <li>
            <a href="#">
            <i class="far fa-sync"></i>
            </a>
            </li>
        </ul>
    </div>`
    
    );

    display = display.join("");
    center.innerHTML = display;
};