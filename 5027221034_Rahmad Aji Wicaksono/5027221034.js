const url = "https://ets-pemweb-23-pjqyzk5qxq-et.a.run.app/products";

fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to fetch data');
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

    function displayProductData(data) {
        const productList = document.getElementById("product-list");
        data.products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <img src="${product.image_url}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <p>${product.discount}</p>
            <p>${product.rating}</p>
            <p>Viewed by:${product.reviews_count}</p>
            `;
            productList.appendChild(productDiv);
        });
    }

  