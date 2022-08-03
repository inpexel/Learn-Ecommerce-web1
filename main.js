const black = document.querySelector('.black');
const cart = document.querySelector('.cart');
const cartPrise = document.querySelectorAll('.cart .prise');
const cartLi = document.querySelectorAll('.cart li');
const closeCart = document.querySelector('.closeCart');
const cartIcon = document.querySelector('#cartIcon'); 
const cartCount = document.querySelector('#cartIcon p'); 
const addCart = document.querySelectorAll('.addCart');
const buyNow = document.querySelectorAll('.buyNow');
const body = document.body;

function totalPrise(){
    const total = [];
}


function totalProductsInCart(){
    const totalProducts = cartLi.length
    cartCount.innerText = totalProducts;

}

totalProductsInCart()

function closeCartF(){
    black.style.display = 'none';
    cart.style.display = 'none';
    console.log('close')
};

function openCart(){
    black.style.display = 'block';
    cart.style.display = 'block';
    cart.style.visibility = 'visible';
    console.log('open')
}

function clicked(){
    console.log(this);
}


closeCart.addEventListener('click', closeCartF);
cartIcon.addEventListener('click', openCart);