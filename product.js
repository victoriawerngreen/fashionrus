let productContainer=document.querySelector(".product_1-1")

fetch("https://kea-alt-del.dk/t7/images/webp/640/1573.webp")
.then(responce => responce.json())
// skriver () efter .json fordi det er en funktion der allerede findes og vi kalder på den via ()
.then(data => {
    productContainer.innerHTML = `
          <img src="1525_bag.webp" alt="produkt billede" />
        </div>
        <div class="product_margin">
          <h2 class="brand-category">PUMA | Sporting goods</h2>
          <h1>Deck Navy Blue Backpack</h1>
          <p class="description">Backpack</p>
          <p class="price">1299,95DKK</p>
          <p class="rabat">55% off</p>
          <p class="price-m-rabat">Now 584,96DKK</p>
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
          </div>`;
})