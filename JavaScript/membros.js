contador = 1;
imagemAnterior = "a"

function ChangeClick(imagem){
    if(window.matchMedia("(max-width: 900px)".matches)){
        card = document.querySelector(`.a${imagem}`)
        cardAnterior = document.querySelector(`.a${imagemAnterior}`)

        cardAnterior.classList.remove("mobile");
        
        if(imagemAnterior == imagem && imagemAnterior != "" && contador < 2){
            contador += 1
            card.classList.toggle("mobile");
        } else{
            if(imagemAnterior == imagem){imagem = "a"}
            contador = 1
            card.classList.remove("mobile");
        }
        imagemAnterior = imagem
        event.stopPropagation();

}
}