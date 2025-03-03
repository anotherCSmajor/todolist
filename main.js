 document.addEventListener("DOMContentLoaded", function() {
 let addmorebtn = document.getElementById("addmorebtn")

addmorebtn.addEventListener("click", addfun);
function addfun(){
let todolist = document.getElementById("todolist")
 let remove= document.createElement("button")
 remove.textContent="X"
remove.id="removebtn"
let  task = document.createElement("input")
task.type="text";

let taskdone= document.createElement("input");
taskdone.type ="checkbox";

let wrapper = document.createElement("div");
 wrapper.id="wrapper"
 taskdone.addEventListener("click",()=> {
          if(taskdone.checked){
            task.classList.add("strikethrough")
          
          }
          else
          {
            task.classList.remove("strikethrough");

          }
           })
wrapper.appendChild(remove)
wrapper.appendChild(taskdone);
wrapper.appendChild(task);
todolist.appendChild(wrapper);
remove.addEventListener("click" ,()=>{
  wrapper.removeChild(task)
  wrapper.removeChild(taskdone)
  wrapper.removeChild(remove)
 })
}

}



)
