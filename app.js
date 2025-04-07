let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    inp.value="";
    let delbtn=document.createElement("button");
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    delbtn.innerText="Delete";
});
ul.addEventListener("click",function(event){
if(event.target.nodeName == "BUTTON"){
   let item=event.target.parentElement;
   item.remove();
}
})
//this is comment
