let sizeBtns = document.querySelectorAll(".size-btn")

for(let i=0;  i < sizeBtns.length; i++) {
  sizeBtns[i].addEventListener("click", function() {
    sizeBtns.forEach(val => {
      val.style.background = "white"
      val.style.color = "red"
    })

    sizeBtns[i].style.background = "red";
    sizeBtns[i].style.color = "white";
  })
}

let colorBtns = document.querySelectorAll(".color-btn")

for(let i=0;  i < colorBtns.length; i++) {

    colorBtns[i].addEventListener("click", function() {
      colorBtns.forEach(val => {
        val.style.border = "2px solid grey"
      })
  
      colorBtns[i].style.border = "2px solid green"
    })
  }