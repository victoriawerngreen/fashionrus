const myCategory = new URLSearchParams(window.location.search).get("category");
const listContainer = document.querySelector(".grid_1-1-1-1");
const overskrift = document.querySelector("h1");

overskrift.innerHTML = myCategory;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}&limit=100`)
  .then((response) => response.json())
  // skriver () efter .json fordi det er en funktion der allerede findes og vi kalder på den via ()
  .then((data) => showList(data));

function showList(products) {
  console.log(products);

  const markup = products
    .map(
      (product) =>
        `<div class="product-item"  ">
          <div class="image-wrapper">
        <p class="sold_out ${product.soldout && "soldOut"}">Sold Out</p>
      <a href="product.html?productId=${product.id}">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
          alt="Produktbillede"/></a>
          </div>
          
          <div class="info">
            <p class="produkt_titel">${product.productdisplayname}</p>
            <p>${product.brandname} | Sporting goods</p>
            <p class="price_view">${product.price}DKK</p>
            <p class="rabat ${product.discount && "isOnSale"}">${product.discount}% off</p>
          </div>
        </div>`
    )
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
