window.onresize = function() {
    removerClasses()
}

contador = 1;
imagemAnterior = "a"

let ChangeClick = (imagem) =>{
    if(window. innerWidth<=900){
        card = document.querySelector(`.a${imagem}`)
        
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

let removerClasses = () =>{
    Cards = document.querySelectorAll(".flip-card-inner")

    Cards.forEach((card) => {
        card.classList.remove('mobile');
      });
}

