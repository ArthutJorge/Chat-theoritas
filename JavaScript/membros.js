
let imagem = document.querySelectorAll('.imagem');
contador = 1;
imagemAnterior = ""
body = document.body



function ChangeClick(imagem){
    if(window.matchMedia("(max-width: 500px)".matches)){
        body.classList.remove("mobile");
        
        if(imagemAnterior == imagem && imagemAnterior != "" && contador < 2){
            contador += 1
            body.classList.toggle("mobile");
        } else{
            if(contador == 2){imagem = ""}
            contador = 1
            body.classList.remove("mobile");
        }
        imagemAnterior = imagem
        event.stopPropagation();

}
}