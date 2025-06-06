const btn= document.getElementById("menu-btn");
const nav=document.getElementById("menu");
function navToggle(){
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')

}
btn.addEventListener("click",navToggle);

AOS.init({
    duration: 2000
});

let lastScrollY = window.scrollY;

function handleScroll() {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    AOS.pause();
  } else {
    AOS.refresh();
  }

  lastScrollY = currentScrollY;
}
window.addEventListener('scroll', handleScroll);
