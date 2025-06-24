if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('serviceWorker.js').then(() => {
      console.log('Service Worker Registered');
    });
  });
}
const productList = document.getElementById('product-list');
const loadButton = document.getElementById('load-products');

const sampleProducts = [
  { name: "Smart Watch", img: "https://img.joomcdn.net/c795ac68e5d0c9202f02f0704b15acabb1b02394_original.jpeg" },
  { name: "Wireless Earbuds", img: "https://avatars.mds.yandex.net/i?id=e6387b43de1d1dc37d19d2e8aab1fabd8f924f9b-4840969-images-thumbs&n=13" },
  { name: "Sneakers", img: "https://avatars.mds.yandex.net/i?id=ab68f61e3472e40af6637844fdc8ed30ab0d7a61-4866825-images-thumbs&n=13" },
  { name: "Backpack", img: "https://avatars.mds.yandex.net/i?id=d2932d5c4c0adc9d9b0eac1bed8cbc2150adba21-5877782-images-thumbs&n=13" },
  { name: "Gaming Mouse", img: "https://avatars.mds.yandex.net/i?id=5306aecdc4f1bc97c0045a66d5914791d8d40b9e-5232592-images-thumbs&n=13" },
  { name: "Camera", img: "https://avatars.mds.yandex.net/i?id=85be6a67b4d80954a21c5759b22e48ad8c012456-4253311-images-thumbs&n=13" },
  { name: "Bluetooth Speaker", img: "https://avatars.mds.yandex.net/i?id=8fd34ea9f7e47c45d44fa0d267e5d577b590f708-9065974-images-thumbs&n=13" },
  { name: "Sunglasses", img: "https://avatars.mds.yandex.net/i?id=c04bc3a30491248444e915941f2e2750917f3fa3-5859957-images-thumbs&n=13" }
];

loadButton.addEventListener('click', () => {
  productList.innerHTML = "";
  sampleProducts.forEach(product => {
    const item = document.createElement('div');
    item.className = "card";
    item.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <button>Add to Cart</button>
    `;
    productList.appendChild(item);
  });
});
