let desserts = [
  {
     id: 1,
     title: "Waffle with Berries",
     category: "Waffle",
     price: "6.50",
     stock: 10,
     img:"assets/img/waffle.png",
  },
  {
    id: 2,
    title: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: "7.00",
    stock: 10,
    img:"assets/img/vanilla-bean.png",
  },
  {
    id: 3,
    title: "Macaron Mix of Five",
    category: "Macaron",
    price: "8.00",
    stock: 10,
    img:"assets/img/macaron.png",
  },
  {
    id: 4,
    title: "Classic Tiramisu",
    category: "Tiramisu",
    price: "5.50",
    stock: 10,
    img:"assets/img/tiramisu.png",
  },
  {
    id: 5,
    title: "Pistachio Baklava",
    category: "Baklava",
    price: "4.00",
    stock: 10,
    img:"assets/img/baklava.png",
  },
  {
    id: 6,
    title: "Lemon Meringue Pie",
    category: "Pie",
    price: "5.00",
    stock: 10,
    img:"assets/img/lemon-meringue.png",
  },
  {
    id: 7,
    title: "Red Velvet Cake",
    category: "Cake",
    price: "4.50",
    stock: 10,
    img:"assets/img/red-velvet.png",
  },
  {
    id: 8,
    title: "Salted Caramel Brownie",
    category: "Brownie",
    price: "5.50",
    stock: 10,
    img:"assets/img/brownie.png",
  },
  {
    id: 9,
    title: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: "6.50",
    stock: 10,
    img:"assets/img/panna-cotta.png",
  },
];


// Basket

const basket = [
  {
    id: 1,
    title: "Waffle with Berries",
    price: "6.50",
    quantity: 0,
 },
 {
   id: 2,
   title: "Vanilla Bean Crème Brûlée",
   price: "7.00",
   quantity: 0,
 },
 {
   id: 3,
   title: "Macaron Mix of Five",
   price: "8.00",
   quantity: 0,
 },
 {
   id: 4,
   title: "Classic Tiramisu",
   price: "5.50",
   quantity: 0,
 },
 {
   id: 5,
   title: "Pistachio Baklava",
   price: "4.00",
   quantity: 0,
 },
 {
   id: 6,
   title: "Lemon Meringue Pie",
   price: "5.00",
   quantity: 0,
 },
 {
   id: 7,
   title: "Red Velvet Cake",
   price: "4.50",
   quantity: 0,
 },
 {
   id: 8,
   title: "Salted Caramel Brownie",
   price: "5.50",
   quantity: 0,

 },
 {
   id: 9,
   title: "Vanilla Panna Cotta",
   price: "6.50",
   quantity: 0,

 },
]
const dessertGroup = document.querySelector(".dessert-group");

let total = 0;
let totalPrice = 0;




function addProduct() {
  for(const dessert of desserts) {
    dessertGroup.innerHTML += 
    `
      <div class="dessert">
        <div class="product-img">
          <img src=${dessert.img} class="card-img" alt="">
          <button class="btn-add-cart" data-id=${dessert.id}><img src="assets/img/shopping-icon.svg" alt="">Add to Cart</button>
        </div>
        <h6>${dessert.category}</h6>
        <h3>${dessert.title}</h3>
        <h5>$${dessert.price}</h5>
      </div>
    `
  }
  const addToCartBtns = document.querySelectorAll(".btn-add-cart");
  for(const addToCartBtn of addToCartBtns) {
    addToCartBtn.addEventListener('click', handleAddBtn)
  }
}
addProduct()

const emptyBasket = document.querySelector(".empty-basket");
const order = document.querySelector(".order");
const cardItems = document.querySelector(".card-items");


function handleAddBtn() {
  let productTitle = this.parentElement.parentElement.children[2];
  // let dessertPrice = this.parentElement.parentElement.children[4];

  for (const dessert of desserts) {
    if(productTitle.innerText === dessert.title) {
      dessert.stock--;
      if(dessert.stock <= 0) {
        outOfStock.showModal()
        exitBtn.addEventListener('click', function() {
          outOfStock.close();
        })
        this.disabled = true;
      }
    }
  }



  for (const item of basket) {
    total = 0;
    totalPrice = 0;
    if(productTitle.innerText === item.title) {
      item.quantity++;
      cardItems.innerHTML = "";

      this.innerHTML = 
      `
      <button id="minusBtn"><img src="assets/img/minus-icon.svg" alt=""></button>
      ${item.quantity}
      <button id="plusBtn"><img src="assets/img/plus-icon.svg" alt=""></button>
      `
      // MinusBtn 
      // minusBtn.addEventListener('click', function(){
      //   if(item.quantity > 1) {
      //     item.quantity--;
      //   }else {
      //     item.quantity = 0;
      //   }
      // })
      // MinusBtn end
      this.classList.add("active-btn"); 
      const cardImg = this.parentElement.querySelector(".card-img");
      cardImg.classList.add("active");
      for(const item of basket ) {
        if(item.quantity > 0) {
          total += item.quantity;
          totalPrice += (item.quantity * item.price)
          emptyBasket.style.display = "none"
          order.style.display = "block"
          cardItems.innerHTML +=
          `
            <li class="card-item">
              <div class="product-info">
                <span class="item-name">${item.title}</span>
                <div>
                  <span class="item-piece">${item.quantity}x</span>
                  <span class="item-price">${item.price}</span>
                  <span class="item-total">$${item.quantity * item.price}</span>
                </div>
              </div>
              <button class="remove-btn"><img src="assets/img/remove-btn.svg" alt=""></button>
            </li>
          `
          const removeBtns = document.querySelectorAll(".remove-btn");
          for (const removeBtn of removeBtns) {
            removeBtn.addEventListener("click", function() {
              console.log(this.parentElement.children[0].children[1].children[2].innerText);
              // total -= 
              // this.parentElement.remove();
            });           
          }
        }
      }

      const orderTotal = document.querySelector(".order-total").children[1];
      orderTotal.innerHTML = `$${totalPrice}`
      // totalPrice = 0;
    } 
  }
}


confirmBtn.addEventListener('click', completedOrder)

function completedOrder() {
  const orderSummary = document.querySelector(".order-summary");
  let lastOrder = cardItems.innerHTML;
  // const removeButtons = document.querySelectorAll(".remove-btn");
  // removeButtons.forEach(button => button.remove());
  lastOrder = lastOrder.replace(/<div class="product-info">/g, `
    <div class="product-info">
    <img src="assets/img/baklava.png" alt="Product Image">
    `);
  // console.log(lastOrder);
  orderSummary.innerHTML = lastOrder


  orderDialog.showModal()
  newOrderBtn.addEventListener('click', function() {
    location.reload();
  })
}


