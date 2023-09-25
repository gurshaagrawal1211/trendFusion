const wrapper=document.querySelector(".sliderWrapper");

console.log(wrapper);

window.addEventListener("load",()=>{
    wrapper.style.transform="translate(0vw)"
})

const menuItems=document.querySelectorAll(".menuItem");

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform=`translate(${-100 * index}vw)`;
    })
});