const wrapper=document.querySelector(".sliderWrapper");

const menuItems=document.querySelectorAll(".menuItem");
const originalDiv=document.querySelector(".product");
let productsContainer=document.querySelector(".products");

const currentProductImg=document.querySelector(".productImg-sm");
const currentProductDesc=document.querySelector(".desc");
const currentProductPrice=document.querySelector(".price");

let basket=JSON.parse(localStorage.getItem("data")) || [];

// let productsToDisplay;
window.addEventListener("load",()=>{
    wrapper.style.transform="translate(0vw)"
  
    productsToDisplay=products.CLOTHES;


        productsToDisplay.map((pro)=>{

          let{id,img,name,desc,price}=pro;  
          const productItem=document.createElement('div');
          productItem.classList.add('product');

          const productImg=document.createElement('div');
          productImg.classList.add('productImg');

          productImg.innerHTML=`<img src="${img}" alt="${name}" class="productImg-sm">`

          const productDetails=document.createElement('div');
          productDetails.classList.add('productDetails');
          
          productDetails.innerHTML=`
            <span class="desc">${desc}</span>
            <span class="price">₹${price}</span>
          `;

          const btns=document.createElement('div');
          btns.classList.add('btns');

          btns.innerHTML=`
            <button onclick="addToCart(${id})" id="cartBtn">Add to Cart</button>
            <button class="buyBtn">Buy Now</button>
          `;

        productDetails.appendChild(btns);
        productItem.appendChild(productImg);
        productItem.appendChild(productDetails);
        productsContainer.appendChild(productItem);
        })

})

let createProduct=()=>{

let productsToDisplay=[];
menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{


        //change the current slide
        wrapper.style.transform=`translate(${-100 * index}vw)`;
        
        while(productsContainer.firstChild)
        {
          productsContainer.removeChild(productsContainer.firstChild)
        }
        
        const value=item.innerHTML;
        //console.log(products[value])
        productsToDisplay=products[value];


        return(productsContainer.innerHTML= productsToDisplay.map((pro)=>{

        let{id,img,name,desc,price}=pro;  
        let search=basket.find((item)=>item.id===id) || []

        return `
          <div class="product" id=${id}>
            <div class="productImg">
              <img class="productImg-sm" src=${img} alt="${name}">
            </div>
            <div class="productDetails">
              <span class="desc">${desc}</span>
              <span class="price">₹${price}</span>
              <div class="btns">
                <button onclick="addToCart(${id})" id="cartBtn">Add to Cart</button>
                <button class="buyBtn">Buy Now</button>
              </div>
            </div>
          </div>
        `
        }))

      })
       
    });

  }


createProduct();

let addToCart = (id) => {
  basket.push({
    id:id,
    item:1
  }) 
  localStorage.setItem("data",JSON.stringify(basket));
  calculation();
  let cartBtn=document.getElementById("cartBtn");
  cartBtn=event.target;
  cartBtn.disabled=true;
}


let calculation = () =>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y, 0);
};

calculation();
























/*const productItem=document.createElement('div');
          productItem.classList.add('product-${id}');

          const productImg=document.createElement('div');
          productImg.classList.add('productImg');

          productImg.innerHTML=`<img src="${pro.img}" alt="${pro.name}" class="productImg-sm">`

          const productDetails=document.createElement('div');
          productDetails.classList.add('productDetails');
          
          productDetails.innerHTML=`
            <span class="desc">${pro.desc}</span>
            <span class="price">₹${pro.price}</span>
          `;

          const btns=document.createElement('div');
          btns.classList.add('btns');

          btns.innerHTML=`
            <button class="cartBtn">Add to Cart</button>
            <button class="buyBtn">Buy Now</button>
          `;

        productDetails.appendChild(btns);
        productItem.appendChild(productImg);
        productItem.appendChild(productDetails);
        productsContainer.appendChild(productItem);
        */

        // <span class="desc">white Off Shoulder Top</span>
        //         <span class="price">₹499</span>
        //         <div class="btns">
        //             <button class="cartBtn">Add to Cart</button>
        //             <button class="buyBtn">Buy Now</button>
        //         </div>