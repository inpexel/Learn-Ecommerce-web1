const black = document.querySelector('.black');
const cart = document.querySelector('.cart');
const closeCart = document.querySelector('.closeCart');

function closeCartF(){
    black.style.display = 'none';
    cart.style.display = 'none';
    console.log('done')
};

closeCart.addEventListener('click', closeCartF);