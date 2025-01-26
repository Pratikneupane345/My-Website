var menu = document.querySelector(".menu")
var cross = document.querySelector(".close")
var mbl = document.querySelector(".mobile");

var tl = gsap.timeline()
tl.to(".mobile",{
    right: 0,
    duration: 0.3,
})
tl.from(".mobile li a",{
    x: 150,
    duration: 0.3, 
    stagger: 0.25,
    opacity: 0
})
tl.from(".mobile .close",{
    opacity: 0
})
tl.pause();


menu.addEventListener("click",() => {
    mbl.style.display = "block";
  tl.play();
}
)
cross.addEventListener("click",() => {
    tl.reverse();
    mbl.style.display = "none"; 
  }
  )
  var typed = new Typed('#element', {
    strings: ['<i>Website Development </i>', ' <i> Web Design </i> ', '<i> Graphics Design</i> ', '<i>SEO </i> ', '<i> Social Media Marketingn </i>', '<i> Social Media Post Design</i>'],
    typeSpeed: 50,
  });