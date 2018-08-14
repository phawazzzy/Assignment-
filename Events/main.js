//document.onclick = function(){
    //alert("i was clicked again");
//}

//function respondToClick(){
    //alert("I just responded to click")
//}

//document.addEventListener('click', respondToClick)

//let firstDiv = document.getElementById(firstDiv);
//firstDiv.onclick =function(){
  //  alert(firstDiv.innerHTML);
   // firstDiv.style.display ="none"
//}




 


let showForm = document.getElementById("showbutton");
let hidebutton = document.getElementById("showbutton");

hidebutton.onclick = function(){ 
    document.getElementById("signin").style.display="none" ;
    signin.style.display="none"
}

showForm.onclick = function(){
   let form = document.getElementById("signin");
   
   if(form.style.display == "block"){
       form.style.display = "none";
       showForm.innerHTML = "SHOW FORM";
   }

   else{
       form.style.display="block";
        showForm.innerHTML ="HIDE FORM"
   }   
   
}

  
    
 