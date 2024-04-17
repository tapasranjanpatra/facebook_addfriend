var ist=document.querySelector("h5")
var add=document.querySelector("#add")
var remove=document.querySelector("#remove")

add.addEventListener("click",function(){
 
  ist.innerHTML="Friend"
  ist.style.color="green"
})
remove.addEventListener("click",function(){
    ist.innerHTML="Stranger"
    ist.style.color="red"
})
