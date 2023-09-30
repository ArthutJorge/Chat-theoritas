contador = 1;
imagemAnterior = ""
body = document.body

function ChangeClick(imagem){
    if(window.matchMedia("(max-width: 900px)".matches)){
        body.classList.remove("mobile");
        
        if(imagemAnterior == imagem && imagemAnterior != "" && contador < 2){
            contador += 1
            body.classList.toggle("mobile");
        } else{
            if(imagemAnterior == imagem){imagem = ""}
            contador = 1
            body.classList.remove("mobile");
        }
        imagemAnterior = imagem
        event.stopPropagation();

}
}