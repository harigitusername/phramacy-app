let x=document.getElementById("first-nav")
let value=true;
let one=function(){
      if(value==true){
            x.style.display="block"
            value=false
      }
      else{
            x.style.display="none"
            value=true
      }
}