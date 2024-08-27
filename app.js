const btnEncriptar=document.querySelector(".container__btnEncriptar");
const txtEncriptar=document.querySelector(".text_area");
const aviso=document.querySelector(".aviso_texto");
const mensajeRespuesta=document.querySelector(".mensaje");
const contenido=document.querySelector(".Tarjeta_contenedor")
const btnCopiar=document.querySelector(".btnCopiar")
const btnDesencriptar=document.querySelector(".container__btnDesencriptar")


//------Encriptar----//

//Este evento es para que no se ejecute por defecto al ser un click en el//
btnEncriptar.addEventListener("click" , e=>{
    e.preventDefault();
    let texto=txtEncriptar.value; //capturar  el valor
    let txt=texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "" );
    console.log(txt);

    if(texto== ""){
        aviso.style.background= "#96C9F4";
        aviso.style.color="#C40C0C";
        aviso.style.fontWeight="800";
        aviso.textContent="El campo de texto no debe estar vacido";

        setTimeout(()=>{
            aviso.removeAttribute("style"); //Para que solo dure el atributo un tiempo los estilos que se aplicaron 
        },1500);

    }

    else if(texto !== txt){
        aviso.style.background= "#96C9F4";
        aviso.style.color="#C40C0C";
        aviso.style.fontWeight="800";
        aviso.textContent="No debe tener acentos y carcateres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style"); //Para que solo dure el atributo un tiempo los estilos que se aplicaron 
        },1500);

    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background= "#96C9F4";
        aviso.style.color="#C40C0C";
        aviso.style.fontWeight="800";
        aviso.textContent="El texto debe ser todo en minuscula";

        setTimeout(()=>{
            aviso.removeAttribute("style"); //Para que solo dure el atributo un tiempo los estilos que se aplicaron 
        },1500);
    }

    else{
        texto= texto.replace(/e/mg, "enter");
        texto= texto.replace(/i/mg, "imes");
        texto= texto.replace(/a/mg, "ai");
        texto= texto.replace(/o/mg, "ober");
        texto= texto.replace(/u/mg, "ufat");

        mensajeRespuesta.innerHTML=texto;
        btnCopiar.style.visibility="inherit";
        contenido.remove();
    }

    console.log(texto);
    

});


//----Desencriptar----//

btnDesencriptar.addEventListener("click" , e=>{
    e.preventDefault();
    let texto=txtEncriptar.value; //capturar  el valor
    let txt=texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "" );
    console.log(txt);

    if(texto== ""){
        aviso.style.background= "#96C9F4";
        aviso.style.color="#C40C0C";
        aviso.style.fontWeight="800";
        aviso.textContent="El campo de texto no debe estar vacido";

        setTimeout(()=>{
            aviso.removeAttribute("style"); //Para que solo dure el atributo un tiempo los estilos que se aplicaron 
        },1500);

    }

    else if(texto !== txt){
        aviso.style.background= "#96C9F4";
        aviso.style.color="#C40C0C";
        aviso.style.fontWeight="800";
        aviso.textContent="No debe tener acentos y carcateres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style"); //Para que solo dure el atributo un tiempo los estilos que se aplicaron 
        },1500);

    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background= "#96C9F4";
        aviso.style.color="#C40C0C";
        aviso.style.fontWeight="800";
        aviso.textContent="El texto debe ser todo en minuscula";

        setTimeout(()=>{
            aviso.removeAttribute("style"); //Para que solo dure el atributo un tiempo los estilos que se aplicaron 
        },1500);
    }

    else{
        texto= texto.replace(/enter/mg, "e");
        texto= texto.replace(/imes/mg, "i");
        texto= texto.replace(/ai/mg, "a");
        texto= texto.replace(/ober/mg, "o");
        texto= texto.replace(/ufat/mg, "u");

        mensajeRespuesta.innerHTML=texto;
        btnCopiar.style.visibility="inherit";
        contenido.remove();
    }
    

});


//----Copiar----//

btnCopiar.addEventListener("click" , e=>{
    e.preventDefault();
    let copiar=mensajeRespuesta;
    copiar.select();
    document.execCommand("copy"); // realiza la operación  de copiar

});

