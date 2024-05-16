document.addEventListener('DOMContentLoaded', () => {
  const shopItemsContainer = document.querySelector('.shop_items');

  for (let i = 1; i <= 15; i++) {
      const item = document.createElement('div');
      item.classList.add('shop_item');
      item.innerHTML = `
          <img src="https://via.placeholder.com/150" alt="Item ${i}">
          <h2>Item ${i}</h2>
          <p>Description for item ${i}</p>
      `;
      shopItemsContainer.appendChild(item);
  }
});
