console.log("siden vises");

const categeoryContainer = document.querySelector(".categories");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  // skriver () efter .json fordi det er en funktion der allerede findes og vi kalder på den via ()
  .then((data) => showList(data));

function showList(category) {
  console.log(category);

  const markup = category
    .map(
      (category) =>
        `<h2> 
            <a href="productlist.html?category=${category.category}" class="categories_knap">${category.category}</a>
        </h2>`
    )
    .join("");
  console.log(markup);
  categeoryContainer.innerHTML = markup;
}
