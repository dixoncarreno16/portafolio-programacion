var visible=false;   


function iniciar() {
       var Elemento=document.getElementById("menu-Img");
       Elemento.addEventListener("Click", mostrarmenu);
    }
    function mostrarmenu(){
        var Elemento=document.getElementById("menuprincipal");}
        if(!visible){
        Elemento.style.display="block";
    visible=true;
    
        }else{
        Elemento.style.display="none";
        visible=false;
    
    window.addEventListener("load", iniciar);
}

