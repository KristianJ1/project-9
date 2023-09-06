let form = document.querySelector("form");
let text = document.getElementById("input-form");
let container = document.querySelector(".todo-items");
let textbox = document.querySelector(".text");
let todoitem = document.querySelector(".todo-item");
let itemscon = document.querySelectorAll(".todo-items-container")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    addItem();
    setItem();
    let submit = document.querySelector("#submitted");
        submit.classList.add("hidden");   

})


function addItem() {
    const itemCol = document.createElement('div');
    itemCol.classList.add("col");
    
    var todoText = text.value;
    
    itemCol.innerHTML = `<div class="todo-item">

    <div class="check">

      <div class="check-mark">
       <div class="marker hidden">
        <img src="images/icon-check.svg" alt="" class="">
       </div>
      </div>

    </div>
  <div class="text">
    ${todoText}
  </div>

  </div>`
    
    container.appendChild(itemCol);
    form.reset();

    

    
    let check = itemCol.querySelector(".check-mark")
    check.addEventListener("click", ()=>{
        itemCol.children[0].classList.toggle("done-text")
        
        let image = itemCol.querySelector(".marker");
        
        image.classList.toggle("hidden")

        check.classList.toggle("done")
    })
    
    
    let button = document.querySelector(".bottom-button");

button.addEventListener("click", ()=>{
  button.classList.toggle("active");
  itemCol.children[0].classList.remove("hidden");
  bcomplete.classList.remove("active")
  bactive.classList.remove("active")


})




    
    
    let bactive = document.querySelector(".bottom-button-active")

    bactive.addEventListener("click", ()=>{
     bactive.classList.toggle("active")
     button.classList.remove("active")
     bcomplete.classList.remove("active")
     if(itemCol.children[0].classList.contains("done-text") === true){
      itemCol.children[0].classList.toggle("hidden");

  }else{
    itemCol.children[0].classList.remove("hidden");
  }
})

   let bcomplete = document.querySelector(".bottom-button-completed")

   bcomplete.addEventListener("click", ()=>{
    bcomplete.classList.toggle("active")
    bactive.classList.remove("active")
    button.classList.remove("active")
    if(itemCol.children[0].classList.contains("done-text") === false ){
      itemCol.children[0].classList.toggle("hidden");
    }else{
      itemCol.children[0].classList.remove("hidden");
    }
   })

   let clearall = document.querySelector(".clear")

   clearall.addEventListener("click", ()=>{
    itemCol.remove();
    todoitem.classList.remove("hidden");

   })


  
   
   
}

let iconswap = document.querySelector(".icon")

let image = document.querySelector("#image")

let bgimage = document.querySelector("#bgimage")

let toggle = true;

let background = document.querySelector("body");

let checkma = document.querySelector(".check")

let itinfo = document.querySelector(".items-info")

iconswap.addEventListener("click", ()=>{
 toggle = !toggle;

 if(toggle){
   image.src = "images/icon-moon.svg"
   bgimage.src = "images/bg-desktop-light.jpg"
   background.style.backgroundColor = "hsl(0, 0%, 98%)"
   text.style.backgroundColor = "hsl(236, 33%, 92%)"
   text.style.color = "hsl(235, 24%, 19%)"
   checkma.style.backgroundColor ="hsl(236, 33%, 92%)"
   itinfo.style.backgroundColor = "hsl(236, 33%, 92%)"
   itinfo.style.color = "hsl(235, 24%, 19%)"
   container.style.backgroundColor = "hsl(236, 33%, 92%)"
   container.style.color = "hsl(235, 24%, 19%)"
   




 }else{
   image.src = "images/icon-sun.svg"
   bgimage.src = "images/bg-desktop-dark.jpg"
   background.style.backgroundColor = "hsl(235, 21%, 11%)"
   text.style.backgroundColor = "hsl(235, 24%, 19%)"
   text.style.color = "hsl(236, 33%, 92%)"
   checkma.style.backgroundColor ="hsl(235, 24%, 19%)"
   itinfo.style.backgroundColor = "hsl(235, 24%, 19%)"
   itinfo.style.color = "hsl(236, 33%, 92%)"
   container.style.backgroundColor = "hsl(235, 24%, 19%)"
   container.style.color = "hsl(0, 0%, 98%)"
   
   
   

   
 }
 

})
    


function setItem(){
  let left = document.querySelector(".left")
  let col = document.querySelectorAll(".col")
 
  let doneItems = document.querySelectorAll(".done-text")
  let diff = col.length-doneItems.length;
  left.innerHTML = `${diff} items left`

  let clearall = document.querySelector(".clear")

  clearall.addEventListener("click", ()=>{
   left.innerHTML = `0 items left`
  })
  

 }