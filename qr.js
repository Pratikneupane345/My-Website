const qrinput = document.getElementById("qrInput");
const qrimage = document.getElementById("qrImage");
const qrbtn = document.getElementById("qrButton");
// console.log(qrinput, qrimage, qrbtn)
qrbtn.addEventListener("click", () => {
  const inputValue = qrinput.value;
//   console.log(inputValre)
if (!inputValue) {
    alert("Please Input a valid URL or a Text !!")
}else{
    qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
    qrimage.alt = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
}
}
)
gsap.to("#qrImage",{
    
    opacity: 1,
    duration: 2,
    delay: 1,
    
})
gsap.from("#qrImage",{
    y: -10,
    duration: 2

})