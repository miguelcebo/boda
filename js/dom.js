preestablecidos();
document.getElementById("ocultar").addEventListener('change', ocultarmostrar);
document.getElementById("enviar").addEventListener("click", añadirInvitado);


function preestablecidos(){

    let borrar1 = document.getElementsByClassName("eliminar")[0];
    let borrar2 = document.getElementsByClassName("eliminar")[1];

    borrar1.addEventListener("click", function(){
        borrar(borrar1);
    }); 
    borrar2.addEventListener("click", function(){
        borrar(borrar2);
    });

    confirmado(document.getElementById("1"));
    confirmado(document.getElementById("2"));

    document.getElementsByTagName("button")[1].addEventListener("click", function(){
        editar(document.getElementsByTagName("span")[0], document.getElementsByTagName("li")[0]);
    });
    document.getElementsByTagName("button")[3].addEventListener("click", function(){
        editar(document.getElementsByTagName("span")[1], document.getElementsByTagName("li")[1]);
    });

}

function ocultarmostrar(){

    let x = document.getElementsByClassName("noconfirmed");

    for(let i = 0; i < x.length; i++){

        if(document.getElementById("ocultar").checked){
            document.getElementsByClassName("noconfirmed")[i].style.display = "none";
        }else{
            document.getElementsByClassName("noconfirmed")[i].style.display = "block";
        } 

    }

}



function norep(nombre){

    let x = document.getElementsByTagName("span");

    event.preventDefault();
    if(nombre != ""){
        
        for(i = 0; i<x.length; i++){

            if(x[i].innerHTML == nombre){
                return false;
            }
    
        }
        
        return true;
    }
    return false;

}

    
function editar(span, padre){

    let x = span.innerHTML;
    var crear = document.createElement("input");

    crear.setAttribute("type", "text");
    padre.replaceChild(crear, span);
    crear.value = x;
    crear.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
         x = crear.value;
         if(norep(x)){
            padre.replaceChild(span, crear);
            span.innerHTML = x;
         }
         
        }
      });
}

function borrar(boton){
    
    if(confirm("¿Estás seguro de que quieres borrar el invitado?")){
        boton.parentElement.remove();
    }
        
}
    
function confirmado(caja){

    caja.addEventListener("change", function(){
        if(caja.checked){
            caja.parentElement.parentElement.removeAttribute("noconfirmed");
            caja.parentElement.parentElement.setAttribute("class", "responded");
        }else{
            caja.parentElement.parentElement.removeAttribute("responded");
            caja.parentElement.parentElement.setAttribute("class", "noconfirmed");
        }

    });

}
  
function añadirInvitado(){

   let newLi = document.createElement("li");
   let nombre = document.createElement("span");
   let etiqueta = document.createElement("label");
   let cuadrado = document.createElement("input");
   let editar = document.createElement("button");
   let borrar = document.createElement("button");

   newLi.setAttribute("class", "noconfirmed")
   
   nombre.innerHTML = document.getElementById("nombre").value;
   
   etiqueta.innerHTML = "Confirmed";
   
   
   cuadrado.setAttribute("type","checkbox");
   etiqueta.appendChild(cuadrado);
   cuadrado.addEventListener("change", confirmado(cuadrado));
  
   editar.innerHTML = "edit";
   editar.addEventListener("click", function(){
        editar(nombre, newLi);
   });

   
   borrar.innerHTML = "remove";
   borrar.addEventListener("click", function(){
    borrar(borrar);
   });

   newLi.appendChild(nombre);
   newLi.appendChild(etiqueta);
   newLi.appendChild(editar);
   newLi.appendChild(borrar);

   if(norep(nombre.innerHTML)){
    document.getElementById("invitedList").appendChild(newLi);
   }

   

}
