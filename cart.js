let label=document.querySelector('.label');
let ShoppingCart=document.querySelector('.shopping-cart');

let basket=JSON.parse(localStorage.getItem("data")) || [];
console.log(basket)

 let generateCartItems=()=>{
     if(basket.length!==0){
        return (ShoppingCart.innerHTML=basket.map((x)=>{
            
            let {id,item}=x;
            let search = products.find((y) => y.id === id) || [];
            //console.log(search)
            return `
                <div class="cart-item">
                    <img width="100" src="${search.img}" alt=""/>
                    <div class="details">
                        <div class="title-price-x">
                        <h4 class="title-price">
                            <p>${search.desc}</p>
                            <p class="cart-item-price">₹${search.price}</p>
                        </h4>
                        <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
                    </div>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">${item}</div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                    <h3>₹${item * search.price}</h3>
                    </div>
                </div>
            `;
        }).join(""))
     }
     else{

        ShoppingCart.innerHTML=``;
        label.innerHTML=`
            <h2>Cart is Empty</h2>
            <a href="index.html">
                <button class="HomeBtn">Back to home</button>
            </a>
        `;

     }
 }

 generateCartItems();

 let increment = (id) =>{
    let search = basket.find((x)=>x.id===id);
    search.item+=1;
    localStorage.setItem("data",JSON.stringify(basket));
    update(id);
    generateCartItems();
 }

 let decrement = (id) =>{
    let search = basket.find((x)=>x.id===id);

    if(search.item === 0)
        return;
    else{
        search.item-=1;
    }
    localStorage.setItem("data",JSON.stringify(basket));
    update(id);
    generateCartItems();
 }

 let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    TotalAmount();
 }

 
let calculation = () =>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y, 0);
};

calculation();

let removeItem = (id) =>{
    basket = basket.filter((x) => x.id !== id)
    generateCartItems();
    TotalAmount();
    calculation();
    localStorage.setItem("data",JSON.stringify(basket));
}

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket.map((x) => {
        let { item, id } = x;
        let search = products.find((y) => y.id === id) || [];
        console.log(search)
        return item * search.price;
      }).reduce((x, y) => x + y, 0);

    // console.log(amount);

    label.innerHTML = `
    <h2>Total Bill : ₹${amount}</h2>
    <a href="payment.html">
        <button class="checkout">Checkout</button>
    </div>
    <button onclick="clearCart()" class="removeAll">Clear Cart</button>
    `;
    }
    else return;
};

TotalAmount();

let clearCart = () =>{
    basket = [];
    generateCartItems();
    calculation();
    localStorage.setItem("data",JSON.stringify(basket));
}

// module.exports=basket;

 