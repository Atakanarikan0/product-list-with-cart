let desserts = [
  {
     id: 1,
     title: "Waffle with Berries",
     category: "Waffle",
     price: "6.50",
     stock: "10",
     img:"assets/img/waffle.png",
  },
  {
    id: 2,
    title: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: "7.00",
    stock: "10",
    img:"assets/img/vanilla-bean.png",
  },
  {
    id: 3,
    title: "Macaron Mix of Five",
    category: "Macaron",
    price: "8.00",
    stock: "10",
    img:"assets/img/macaron.png",
  },
  {
    id: 4,
    title: "Classic Tiramisu",
    category: "Tiramisu",
    price: "5.50",
    stock: "10",
    img:"assets/img/tiramisu.png",
  },
  {
    id: 5,
    title: "Pistachio Baklava",
    category: "Baklava",
    price: "4.00",
    stock: "10",
    img:"assets/img/baklava.png",
  },
  {
    id: 6,
    title: "Lemon Meringue Pie",
    category: "Pie",
    price: "5.00",
    stock: "10",
    img:"assets/img/lemon-meringue.png",
  },
  {
    id: 7,
    title: "Red Velvet Cake",
    category: "Cake",
    price: "4.50",
    stock: "10",
    img:"assets/img/red-velvet.png",
  },
  {
    id: 8,
    title: "Salted Caramel Brownie",
    category: "Brownie",
    price: "5.50",
    stock: "10",
    img:"assets/img/brownie.png",
  },
  {
    id: 9,
    title: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: "6.50",
    stock: "10",
    img:"assets/img/panna-cotta.png",
  },
];

const dessertGroup = document.querySelector(".dessert-group");

function addProduct() {
  for(const dessert of desserts) {
    dessertGroup.innerHTML += 
    `
      <div class="dessert">
        <div class="product-img">
          <img src=${dessert.img} alt="">
          <button class="btn-add-cart"><img src="assets/img/shopping-icon.svg" alt="">Add to Cart</button>
        </div>
        <h6>${dessert.category}</h6>
        <h3>${dessert.title}</h3>
        <h5>$${dessert.price}</h5>
      </div>
    `
  }
}
addProduct()

const addToCartBtns = document.querySelectorAll(".btn-add-cart");
const emptyBasket = document.querySelector(".empty-basket");
const order = document.querySelector(".order");
const cardItems = document.querySelector(".card-items");


for(const addToCartBtn of addToCartBtns) {
  let count = 0;
  addToCartBtn.addEventListener('click', function() {
    const dessertInfo = document.querySelector(".dessert"); 
    const dessertCtgry = dessertInfo.children[1].innerText; 
    const dessertName = dessertInfo.children[2].innerText; 
    let dessertPrice = dessertInfo.children[3].innerText; 
    const dessertPriceNmbr = Number(dessertPrice)
    let total = count * dessertPriceNmbr

    console.log(dessertCtgry);
    count++;
    emptyBasket.style.display = "none"
    order.style.display = "block"
    cardItems.innerHTML +=
    `
      <li class="card-item">
        <div class="product-info">
          <span class="item-name">${dessertName}</span>
          <div>
            <span class="item-piece">${count}x</span>
            <span class="item-price">${dessertPrice}</span>
            <span class="item-total">${total}</span>
          </div>
        </div>
        <button class="remove-btn"><img src="assets/img/remove-btn.svg" alt=""></button>
      </li>
    `

    const productImg = addToCartBtn.parentElement.childNodes[1];
    productImg.classList.add("active");
    if(productImg.classList.contains("active")) {
      this.innerHTML = 
      `
        <button id="minusBtn"><img src="assets/img/minus-icon.svg" alt=""></button>
        ${count}
        <button id="plusBtn"><img src="assets/img/plus-icon.svg" alt=""></button>
      `
      this.classList.add("active-btn"); 
      productControl(count)
    }
    
  })
}

function productControl(count) {
  minusBtn.addEventListener('click', function() {
    count--;
  })
}

// function takeOrder(productImg, count) {
//   const productInfo = productImg.parentElement.parentElement;
//   console.log(productInfo);
//   let total = 5;
//   emptyBasket.style.display = "none"
//   order.style.display = "block"
//   cardItems.innerHTML +=
//   `
//     <li class="card-item">
//       <div class="product-info">
//         <span class="item-name">${productInfo.children[3]}</span>
//         <div>
//           <span class="item-piece">${count}x</span>
//           <span class="item-price">${productInfo.childNodes[4]}</span>
//           <span class="item-total">${total}</span>
//         </div>
//       </div>
//       <button class="remove-btn"><img src="assets/img/remove-btn.svg" alt=""></button>
//     </li>
//   `
// }
