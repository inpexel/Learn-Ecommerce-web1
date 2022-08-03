const black = document.querySelector('.black');
const cart = document.querySelector('.cart');
const cartList = document.querySelector('.cart ul');
const cartPrise = document.querySelectorAll('.cart .prise');
const cartLi = document.querySelectorAll('.cart li');
const closeCart = document.querySelector('.closeCart');
const cartIcon = document.querySelector('#cartIcon'); 
const cartCount = document.querySelector('#cartIcon p'); 
const addCart = document.querySelectorAll('.addCart');
const buyNow = document.querySelectorAll('.buyNow');
const removeFromCart = document.querySelectorAll('.removeFromCart');
const body = document.body;

addCart.forEach(function(btn){
    btn.addEventListener('click', (event) => {
        const imgLink = event.target.parentElement.children[0].src;
        const productName = event.target.parentElement.children[1].innerText;
        const productPrice = event.target.parentElement.children[2].innerText;
        const li = document.createElement('li');
        const liHtml = `<div class="cartProduct">
        <p class="removeFromCart">x</p>
        <img
          src="${imgLink}"
          alt=""
        />
        <h2>${productName}</h2>
        <h2 class="prise">${productPrice}</h2>
        <input type="number" name="count" id="count" value="1" min="1"/>
      </div>`;

        li.innerHTML = liHtml;
        cartList.append(li);
        
        removeFromCart.forEach((btn) => {
            btn.addEventListener('click', function(event){
                const removeProduct = event.target.parentElement;
                removeProduct.remove();
            })
        })
    })
});


function totalPrise(){
    const total = [];
}


function totalProductsInCart(){
    const totalProducts = cartLi.length
    if(totalProducts == 0){
        cartCount.style.display = 'none';
    }
    else{cartCount.innerText = totalProducts;}  
}

totalProductsInCart();


function closeCartF(){
    black.style.display = 'none';
    cart.style.display = 'none';
};

function openCart(){
    black.style.display = 'block';
    cart.style.display = 'block';
    cart.style.visibility = 'visible';
}


closeCart.addEventListener('click', closeCartF);
cartIcon.addEventListener('click', openCart);