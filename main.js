document.addEventListener("DOMContentLoaded",function () {
   
const newTask =document.querySelector("#task");

const submit =document.querySelector("#submit");






submit.disabled =true;

document.querySelector("#task").onkeyup = function(){
    submit.disabled =false;

    
}
    
    




document.querySelector("form").onsubmit = function() {
    const task = newTask.value;
    

    
    
    
    const li = document.createElement("li");

    li.innerHTML =task;

    document.querySelector("#tasks").append(li);{
        
        

        if(newTask.value = ""){
            submit.disabled =true; 
            
        }else{
        submit.disabled =false;
        }

        newTask.value="";
        
        
        
    }

    
    
    return false;
    
    
}





});

