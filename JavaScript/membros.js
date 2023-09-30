
contador = 1;
imagemAnterior = ""
body = document.body
imagemPreAnterior = ""



function ChangeClick(imagem){
    if(window.matchMedia("(max-width: 500px)".matches)){
        body.classList.remove("mobile");
        
        if(imagemAnterior == imagem && imagemAnterior != "" && contador < 2 && imagemPreAnterior != imagemAnterior){
            contador += 1
            body.classList.toggle("mobile");
        } else{
            imagemPreAnterior = ""
            if(contador == 2){imagemPreAnterior = imagemAnterior}
            contador = 1
            body.classList.remove("mobile");
        }
        imagemAnterior = imagem
        event.stopPropagation();

}
}