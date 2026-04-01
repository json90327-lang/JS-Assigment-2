fetch("https://dummyjson.com/carts")
  .then(res => res.json())
  .then(data => {

    let carts = data.carts;

    let highValueCarts = carts.filter(cart => cart.total > 500);

    let result = highValueCarts.map(cart => {
      return {
        cartId: cart.id,
        userId: cart.userId,
        totalAmount: cart.total,
        totalProducts: cart.totalProducts
      };
    });

    let tbody = document.getElementById("tableBody");

    result.forEach(cart => {
      let row = `
        <tr>
          <td>${cart.cartId}</td>
          <td>${cart.userId}</td>
          <td>${cart.totalAmount}</td>
          <td>${cart.totalProducts}</td>
        </tr>
      `;
      tbody.innerHTML += row;
    });

  })
  .catch(err => console.log(err));