
const products = [
  [
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
  [
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
    
];


const wrapper=document.querySelector(".sliderWrapper");


const menuItems=document.querySelectorAll(".menuItem");
const originalDiv=document.querySelector(".product");
const productsContainer=document.querySelector(".products");


const currentProductImg=document.querySelector(".productImg-sm");
const currentProductDesc=document.querySelector(".desc");
const currentProductPrice=document.querySelector(".price");





window.addEventListener("load",()=>{
    wrapper.style.transform="translate(0vw)"
     for(let i=0;i<3;i++)
      {
          const clonedDiv=originalDiv.cloneNode(true);
          productsContainer.appendChild(clonedDiv);

        let choosenProduct=products[0];

        currentProductImg.src=choosenProduct[i].img;
        currentProductDesc.textContent=choosenProduct[i].desc;
        currentProductPrice.textContent= "₹" + choosenProduct[i].price;
       
      }

})



menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //change the current slide
        wrapper.style.transform=`translate(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct=products[index];

        // //change texts of currentProduct

        for(let i=0;i<3;i++)
        {
          const clonedDiv=originalDiv.cloneNode(true);
          productsContainer.appendChild(clonedDiv);

        // currentProductPrice.textContent= "$" + choosenProduct.price;
        currentProductImg.src=choosenProduct[i].img;
        currentProductDesc.textContent=choosenProduct[i].desc;
        currentProductPrice.textContent= "₹" + choosenProduct[i].price;
       
        }
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


console.log(choosenProduct[1].img);

