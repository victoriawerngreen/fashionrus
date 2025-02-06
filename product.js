// ---------------produkt---------------
// const productContainer = document.querySelector(".product_1-1");
// const productId = 1525;
// productId er det nummer produktet har på kea-alt-del.dk (hvilket vi har linket til i fetch)

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const productId = urlParams.get("productId");

console.log("productId", productId);

let productContainer = document.querySelector(".product_1-1");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((responce) => responce.json())
  // skriver () efter .json fordi det er en funktion der allerede findes og vi kalder på den via ()
  .then((data) => {
    productContainer.innerHTML = `
           <img
          src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp"
          alt="Produktbillede"
        />
        <div class="product_margin">
          <h2 class="brand-category">${data.brandname} | ${data.category}</h2>

          <h1>${data.productdisplayname}</h1>

          <p class="description">${data.articletype} </p>

          <p class="price">${data.price}DKK</p>

        <p class="rabat ${!data.discount && "hide"}">${data.discount}% off</p>


            <p class="rabat_price ${!data.discount && "hide"}">Now ${Math.round(data.price - (data.price / 100) * data.discount)} DKK</p>

          <p class="sold_out ${data.soldout && "show"}">Sold Out</p>


          <div class="grid_1-1">
            <p class="option">Gender:</p>
            <p>${data.gender}</p>
          </div>

          <div class="laeg-i-kurv">
            <p class="kurv_knap">Add to basket</p>
          </div>
          <div> <p class="option">Product information:</p>
            <p class="info">${data.description}</p> </div>
          `;
  });
