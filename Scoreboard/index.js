let homeScore=document.getElementById("home")
let one=document.getElementById("one")
let two =document.getElementById("two")
let homeCount=0

one.addEventListener("click",function(){
  
homeCount += 1
homeScore.innerHTML= homeCount
})

two.addEventListener("click",function(){
homeCount += 2
homeScore.innerHTML= homeCount
    
})
document.getElementById("three").addEventListener("click",function(){
homeCount += 3
homeScore.innerHTML= homeCount
    
    
})

let guestScore=document.getElementById("guest")
let guestOne=document.getElementById("guest-one")
let guestTwo =document.getElementById("guest-two")
let guestThree=document.getElementById("guest-three")
let guestCount=0



guestOne.addEventListener("click",function(){
  
guestCount += 1
guestScore.innerHTML= guestCount
})

guestTwo.addEventListener("click",function(){
guestCount += 2
guestScore.innerHTML= guestCount
    
})
guestThree.addEventListener("click",function(){
guestCount += 3
guestScore.innerHTML= guestCount
    
})