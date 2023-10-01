
const products = {
  CLOTHES:[
    {
      id:0,
      img:"./images/dress1.jpg",
      desc:"White Off Shoulder Top",
      price:"499",
    },
    {
      id:0,
      img:"./images/dress2.jpg",
      desc:"Red Maxi Dress",
      price:"899",
    },
    {
      id:1,
      img:"./images/dress3.jpg",
      desc:"Purple Maxi Dress",
      price:"799",
    },
    {
      id:2,
      img:"./images/dress4.jpg",
      desc:"Bottle neck Gown",
      price:"999",
    },
  ],
  ACCESSORIES:[
    {
      id:0,
      img:"./images/accessories1.jpg",
      desc:"Rose Gold Bracelet",
      price:"299",
    },
    {
      id:1,
      img:"./images/accessories2.jpg",
      desc:"Star Shaped Earrings",
      price:"99",
    },
    {
      id:2,
      img:"./images/accessories3.jpg",
      desc:"Pearl Necklace",
      price:"179",
    },
    {
      id:3,
      img:"./images/accessories4.jpg",
      desc:"3-layers Necklace",
      price:"399",
    },
  ],
  MAKEUP:[
    {
      id:0,
      img:"./images/makeup1.jpg",
      desc:"Red Matt Lipstick",
      price:"599",
    },
    {
      id:1,
      img:"./images/makeup2.jpg",
      desc:"Makeup Brush Set",
      price:"499",
    },
    {
      id:2,
      img:"./images/makeup3.jpg",
      desc:"Illuminating face cream",
      price:"999",
    },
    {
      id:3,
      img:"./images/makeup4.jpg",
      desc:"Conclear",
      price:"399",
    },
  ],
  BAGS:[
    {
      id:0,
      img:"./images/bag1.jpg",
      desc:"Baby pink Hand-held Bag",
      price:"899",
    },
    {
      id:1,
      img:"./images/bag2.jpg",
      desc:"Multicolor Shoulder Bag",
      price:"699",
    },
    {
      id:2,
      img:"./images/bag3.jpg",
      desc:"Red Shoulder Bag",
      price:"799",
    },
    {
      id:3,
      img:"./images/bag4.jpg",
      desc:"Sea green Hand-held Bag",
      price:"999",
    },
  ],
   FOOTWEAR:[
    {
      id:0,
      img:"./images/footwear1.jpg",
      desc:"Casual Sneakers",
      price:"399",
    },
    {
      id:1,
      img:"./images/footwear2.jpg",
      desc:"Flower Print Heels",
      price:"699",
    },
    {
      id:2,
      img:"./images/footwear3.jpg",
      desc:"Boots For Women",
      price:"899",
    },
    {
      id:3,
      img:"./images/footwear4.jpg",
      desc:"Baby Pink Shoes",
      price:"499",
    },
  ],
};


const wrapper=document.querySelector(".sliderWrapper");


const menuItems=document.querySelectorAll(".menuItem");
const originalDiv=document.querySelector(".product");
let productsContainer=document.querySelector(".products");


const currentProductImg=document.querySelector(".productImg-sm");
const currentProductDesc=document.querySelector(".desc");
const currentProductPrice=document.querySelector(".price");





window.addEventListener("load",()=>{
    wrapper.style.transform="translate(0vw)"
  
    productsToDisplay=products.CLOTHES;


        productsToDisplay.map((pro)=>{

          
          const productItem=document.createElement('div');
          productItem.classList.add('product');

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
        })

})


// let productsToDisplay;

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


        productsToDisplay.map((pro)=>{

          
          const productItem=document.createElement('div');
          productItem.classList.add('product');

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
        })

      })
       
    });


// const productButton=document.querySelector(".productButton")
// const payment=document.querySelector(".payment");
// productButton.addEventListener("click",()=>{
//   payment.style.display="flex";
// });

// const close=document.querySelector(".close");
// close.addEventListener("click",()=>{
//   payment.style.display="none";
// })




