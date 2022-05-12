//mobile menu
const openMenu = document.getElementById('menu_btn');
const closeMenu = document.getElementById('close_nav_btn');

const menu = document.getElementById('main_nav')
closeMenu.addEventListener('click', function(){
    menu.style.display = "none";
})
openMenu.addEventListener('click', function(){
    menu.style.display = "block";

})

//hero image slider for mobile
const arrowNext = document.getElementById('arrow_next');
const arrowPrev = document.getElementById('arrow_prev');

let heroImage = document.getElementById('hero_image');
var i = 1;
function heroImageChanger(){
    if(i == 1){
        heroImage.src = "images/image-product-1.jpg"
    }
    else if(i == 2){
        heroImage.src = "images/image-product-2.jpg"
    }
    else if(i == 3){
        heroImage.src = "images/image-product-3.jpg"
    }
    else if(i == 4){
        heroImage.src = "images/image-product-4.jpg"
    }
}
arrowNext.addEventListener('click', function(){
    if(i == 4){
        i = 4;
    }
    else{
        i++;
    }
    heroImageChanger();
})
arrowPrev.addEventListener('click', function(){
    if(i == 1){
        i = 1;
    }
    else{
        i--;
    }
    heroImageChanger();
})

//counter
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const addToCart = document.getElementById('add_to_cart');

let numberOfItems = document.getElementsByClassName('number');
let finalPrice = document.getElementById('final_price');


let justNumber = 0;
function outputItemsNumber(){
    [].slice.call( numberOfItems ).forEach(function ( numberOfItems ) {
        numberOfItems.innerHTML = justNumber;
    });

    finalPrice.innerHTML = justNumber*125;

}
plus.addEventListener('click', function(){
    justNumber++;
    outputItemsNumber();
})  
minus.addEventListener('click', function(){
    if(justNumber == 0){
        justNumber = 0;
    }
    else{
        justNumber--;
        outputItemsNumber();
    }
})
addToCart.addEventListener('click', function(){
    if(justNumber == 0){
        document.getElementById('items').style.display = 'none';
        document.getElementById('empty_cart').style.display = "block";
    }
    else{
        document.getElementById('items').style.display = 'flex';
        document.getElementById('empty_cart').style.display = "none";

    }
})


//basket

const deleteBtn = document.getElementById('delete')
const openCloseCart = document.getElementById('nav_cart_icon');
const basketMenu = document.getElementById('states-backet');

deleteBtn.addEventListener('click', function(){
    document.getElementById('items').style.display = 'none';
    document.getElementById('empty_cart').style.display = "block";
    [].slice.call( numberOfItems ).forEach(function ( numberOfItems ) {
        numberOfItems.innerHTML = 0;
    });

})

openCloseCart.addEventListener('click', function(){
    if(basketMenu.style.display == 'none'){
        basketMenu.style.display = 'block';
    }
    else{
        basketMenu.style.display = 'none';
    }
})


//image viewer desktop
const imgThumbnail = Array.from(document.querySelectorAll('.img_thumbnail_viewer'));

imgThumbnail[0].addEventListener('click', function(){
    heroImage.src = 'images/image-product-1.jpg'
})
imgThumbnail[1].addEventListener('click', function(){
    heroImage.src = 'images/image-product-2.jpg'
})
imgThumbnail[2].addEventListener('click', function(){
    heroImage.src = 'images/image-product-3.jpg'
})
imgThumbnail[3].addEventListener('click', function(){
    heroImage.src = 'images/image-product-4.jpg'
})

//the lightbox
const imgThumbnailLightbox = Array.from(document.querySelectorAll('.img_thumbnail_lightbox'));
const heroImageLightbox = document.getElementById('hero_image_lightbox');

imgThumbnailLightbox[0].addEventListener('click', function(){
    heroImageLightbox.src = 'images/image-product-1.jpg'
})
imgThumbnailLightbox[1].addEventListener('click', function(){
    heroImageLightbox.src = 'images/image-product-2.jpg'
})
imgThumbnailLightbox[2].addEventListener('click', function(){
    heroImageLightbox.src = 'images/image-product-3.jpg'
})
imgThumbnailLightbox[3].addEventListener('click', function(){
    heroImageLightbox.src = 'images/image-product-4.jpg'
})


//the lightbox navigation
const lightboxBack = document.getElementById('lightbox');
const closeLightbox = document.getElementById('close_lightbox');
closeLightbox.addEventListener('click', function(){
    lightboxBack.style.display = 'none';
})

heroImage.addEventListener('click', function(){
    lightboxBack.style.display = 'block';
})