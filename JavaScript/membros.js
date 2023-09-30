
let imagem = document.querySelectorAll('.imagem');
contador = 1;
imagemAnterior = ""
body = document.body



function ChangeClick(imagem){
    if(window.matchMedia("(max-width: 500px)".matches)){
        if(body.classList.toggle("mobile", true) == true){
            body.classList.toggle("mobile");
        }
        
        if(imagemAnterior == imagem && imagemAnterior != "" && contador <= 2){
            contador += 1
            body.classList.toggle("mobile");
        } else{
            contador = 1
        }
        imagemAnterior = imagem
        event.stopPropagation();

}
}