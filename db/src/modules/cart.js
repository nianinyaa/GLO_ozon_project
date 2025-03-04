const cart = () => {
  const cartBtn = document.getElementById("cart");
  const cartModal = document.querySelector(".cart");
  const cartCloseBtn = cartModal.querySelector(".cart-close");
  
  const goodsWrapper = document.querySelector('.goods');

  const openCart = () => {
    cartModal.style.display = "flex";
  };

  const closeCart = () => {
    cartModal.style.display = "";
  };

  cartBtn.addEventListener("click", openCart);

  cartCloseBtn.addEventListener("click", closeCart);

  goodsWrapper.addEventListener('click', (event) => {
    if(event.target.classList.contains('btn-primary')){
        const card = event.target.closest('.card')
        const key = card.dataset.key;
        const goods = JSON.parse(localStorage.getItem('goods'))

        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            //чуть выше это тернарный оператор - заносит в значение карт одно из двух вариантов 

         const goodItem = goods.find((item) => {
          return item.id === +key
         })
         console.log(goodItem)
    }
  }) 
}
export default cart