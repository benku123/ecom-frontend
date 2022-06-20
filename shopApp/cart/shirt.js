'use strict';


let total_text = document.querySelectorAll(".total")
let cost_text = document.querySelectorAll(".cost")
let incBtn = document.querySelectorAll(".inc-btn")
let decBtn = document.querySelectorAll(".dec-btn")
let count_text = document.querySelectorAll(".count")

let cost = [0, 0]
let total = [0, 0]
let count = [0, 0]



for(let i=0; i<count_text.length; i++) {

    cost[i] = Number(cost_text[i].innerHTML)

    let increment = function() {
        total[i] = total[i] + cost[i]    
        count[i] = count[i] + 1
        count_text[i].innerHTML = count[i];
        total_text[i].innerHTML = total[i];
    }
    
    let decrement = function() {
        
        total[i] = total[i] - cost[i]    
        count[i] = count[i] - 1
        count_text[i].innerHTML = count[i];
        total_text[i].innerHTML = total[i];
        if(count[i] < 0){
            total[i]=0;
            count[i]=0
            count_text[i].innerHTML = count[i];
            total_text[i].innerHTML = total[i];
        }
    } 
    
    incBtn[i].addEventListener("click", function(e) {
        e.preventDefault()
        increment()
    })
    decBtn[i].addEventListener("click", function(e){
        e.preventDefault()
        decrement()
    })
}