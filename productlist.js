const listContainer = document.querySelector(".grid_1-1-1-1");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  // skriver () efter .json fordi det er en funktion der allerede findes og vi kalder på den via ()
  .then((data) => showList(data));

function showList(products) {
  console.log(products);

  let markup = "";

  products
    .map((product) => {
      markup += `<div class="product-item">
          <a href="product.html"><img
          src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
          alt="Produktbillede"
/></a>
          <div class="info">
            <p class="produkt_titel">${product.productdisplayname}</p>
            <p>${product.brandname} | Sporting goods</p>
            <p class="price_view">${product.price}DKK</p>
          </div>
        </div>`;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
