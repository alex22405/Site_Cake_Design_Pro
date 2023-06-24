/*********************************************************************************************/
// Effet scroll nav
window.addEventListener('scroll', function()
{
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
}
)
/*********************************************************************************************/
// Apparition titre et p
const titreSpans = document.querySelectorAll('.banner_content span');


window.addEventListener('load', () => {
    const TL = gsap.timeline({paused:  true});
    
    TL
    .staggerFrom(titreSpans, 1, {opacity: 0.2, ease: "power2.out"}, 0.4)
    TL.play()
}
) 
/*********************************************************************************************/
// Responsive menu toggle
function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    const productMenu = document.querySelector('.product_menu')

    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    productMenu.style.display = (productMenu.style.display === "block") ? "none" : "block";
}
/*********************************************************************************************/
// Apparition des fleurs
// const imgs = document.querySelectorAll('img');
// const TL = gsap.timeline({paused: true});
// const header = document.querySelector('header')
// TL
// .staggerTo(imgs, {scale: 1, duration: 0.4, stagger:0.1});

// header.addEventListener('mouseenter', () => {

//    TL.play();
// })
// header.addEventListener('mouseout', () => {

//    TL.reverse();
// })




// const flowers = document.querySelectorAll('.flw');
// const header = document.querySelector('header');
// const animationDuration = 0.4;

// const tl = gsap.timeline({ paused: true });
// tl.staggerTo(flowers, { scale: 1, duration: animationDuration, stagger: 0.1 });

// flowers.forEach((flower) => {
//   gsap.set(flower, { scale: 0 });
// });

// header.addEventListener('mouseenter', () => {
//   tl.play();
// });

// header.addEventListener('mouseout', () => {
//   tl.reverse();
// });
/*********************************************************************************************/

