// Choosing Size for T-Shirt
let sizeBtn = document.querySelectorAll(".size-btn")


for(let i=0; i < sizeBtn.length; i++){
    sizeBtn[i].addEventListener("click", function() {
        sizeBtn.forEach(val=> val.classList.remove("active-size"))
        sizeBtn[i].classList.add("active-size");
    })
}
let addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", function() {
    alert("Successfully Added !")
})
// Choosing Color for T-Shirt

let colorBtn = document.querySelectorAll(".color-btn")

for(let i=0; i < colorBtn.length; i++) {
    colorBtn[i].addEventListener("click", function() {
        colorBtn.forEach(val => {
            val.style.border = "2px solid rgb(194, 189, 189)";
        })
        colorBtn[i].style.border = "3px solid blue";
    })
}