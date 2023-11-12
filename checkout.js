const payButton=document.getElementById("payButton");
let baskets=JSON.parse(localStorage.getItem("data")) || [];
const basket = [].concat.apply([], baskets);

payButton.addEventListener("click", () => {

  console.log("first")
  fetch("/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    
     body: JSON.stringify({
       items: [
         { id: 1, quantity: 3 },
         { id: 2, quantity: 1 },
       ],
     }),
  })
    .then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      window.location = url
    })
    .catch(e => {
      console.error(e.error)
    })
})