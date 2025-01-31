const productContainer = document.querySelector(".product_1-1");
const productId = 1525;
// productId er det nummer produktet har på kea-alt-del.dk (hvilket vi har linket til i fetch)

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
.then(responce => responce.json())
// skriver () efter .json fordi det er en funktion der allerede findes og vi kalder på den via ()
.then(data => {
    productContainer.innerHTML = `
           <img
          src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"
          alt="Produktbillede"
        />
        <div class="product_margin">
          <h2 class="brand-category">${data.brandname} | ${data.category}</h2>

          <h1>${data.productdisplayname}</h1>

          <p class="description">${data.articletype} </p>

          <p class="price">${data.price}DKK</p>

          <p class="rabat">${data.discount}% off</p>

          <p class="price-m-rabat">Now 584DKK</p>

          <div class="grid_1-1">
            <p class="option">Color:</p>
            <p>Navy</p>
          </div>

          <div class="grid_1-1">
            <p class="option">Size:</p>
            <p>One-size</p>
          </div>

          <div class="laeg-i-kurv">
            <p class="kurv_knap">Add to basket</p>
          </div>
          `;
});


