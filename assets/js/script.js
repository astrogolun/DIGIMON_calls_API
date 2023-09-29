var gato = document.querySelector("#gatomon");
gato.onmouseenter = function(){
    gato.style.width = "40%";
}

gato.onmouseleave = function(){
    gato.style.width = "30%";
}

var arrow = document.querySelector("#flecha");
arrow.onmouseenter = function(){
    flecha.style.width="15%";
};
var arrow = document.querySelector("#flecha");
arrow.onmouseenter = function(){
    flecha.style.width="10%";
};

var link = document.querySelector(".nav-item");
link.onmouseenter = function(){
  link.style.backgroundColor="grey"
};

var link = document.querySelector(".nav-item");
link.onmouseleave = function(){
  link.style.backgroundColor="white"
};

var link2 = document.getElementById("link2");
link2.onmouseenter = function(){
  link2.style.backgroundColor="grey"
};

var link2 = document.querySelector("#link2");
link2.onmouseleave = function(){
  link2.style.backgroundColor="white"
};

var link3 = document.getElementById("link1");
link3.onmouseenter = function(){
  link3.style.backgroundColor="grey"
};

var link3 = document.getElementById("link1");
link3.onmouseleave = function(){
  link3.style.backgroundColor="white"
};

    

var table = document.querySelector("#tabla");

var url = "https://digimon-api.vercel.app/api/digimon"


fetch(url)

.then(response => response.json())
.then(lista => {tabla(lista)
 
    console.log(lista)    

});


function tabla(lista){
    table.innerHTML =""

    for (let tempo of lista){
        
        table.innerHTML +=`  

     
        <tbody id="tabla">
        <tr>         
          <td> <img onclick="${tempo.name}()"  src=${tempo.img}  id="small-img" class="card-img-top imgtable" alt="digimon-api"></td>
          <td class="td-text" onclick="${tempo.name}()" id=${tempo.name}> ${tempo.name} </td>
          <td onclick="${tempo.name}()" > ${tempo.level} </td>
        
        </tr>
      </tbody>
        
        `
           
        
    }

};


//Script para buscar y que aparezca un solo digimon
var otro = document.querySelector("#tarjetauno");
var tdos = document.querySelector("#tarjetados");
var btnsearch = document.querySelector("#buscar"); 
var form=document.getElementById("form1");

function submitForm(event) {
    event.preventDefault();
}

form.addEventListener("submit", submitForm
)

btnsearch.addEventListener("click",
()=>{
    
    var nomvar =document.getElementById("busqueda").value
    console.log(nomvar);
    fetch("https://digimon-api.vercel.app/api/digimon/name/"+nomvar)
        .then(response =>response.json())
        .then(datos =>crear(datos))
       
});


//Imprimir datos de la API a la tarjeta dentro del html
 function crear(datos){
 otro.innerHTML=""
 otro.innerHTML=
 `
<div id="tarjetauno" class="col">
 <div class="card" style="width: 18rem;">
   <img src=${datos[0].img}  class="card-img-top imgtjta" alt="digimon">
   <div class="card-body">
     <h5 id="c-title" class="card-title"> <b> ${datos[0].name} </b> </h5>
     <p id="c-text" class="card-text"> ${datos[0].level} </p>
   </div>
 </div>
</div>

`
};

 

//Cerrar el modal una vez abierto
// var span = document.getElementsByClassName("close")[0];
// span.onclick = function() {
//     myModal.style.display = "none";
// };

//Script para que aparezca un digimon en grande cuando hacen click en la lista
// var myModal = document.querySelector("#myModal");

function Tsunomon(){

var nombre = document.querySelector("#Tsunomon").innerHTML;
console.log(nombre);    
fetch("https://digimon-api.vercel.app/api/digimon/name/"+nombre)
.then(response =>response.json())
.then(dato =>crea(dato))

};

function crea(dato){
    tdos.innerHTML=""
    tdos.innerHTML=
    `
   <div id="tarjetados" class="col">
    <div class="card" style="width: 18rem;">
      <img src=${dato[0].img}  class="card-img-top imgtjta" alt="digimon">
      <div class="card-body">
        <h5 id="c-title" class="card-title">${dato[0].name}</h5>
        <p id="c-text" class="card-text">${dato[0].level} </p>
      </div>
    </div>
   </div>
   
   `
};



function Koromon(){
var nombre = document.querySelector("#Koromon").innerHTML;
console.log(nombre);  
fetch("https://digimon-api.vercel.app/api/digimon/name/"+nombre)
.then(response =>response.json())
.then(datos =>crear(datos))    
};

function Motimon(){
    var nombre = document.querySelector("#Motimon").innerHTML;
    console.log(nombre);  
}



    




