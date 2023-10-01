const imagemOriginal = document.getElementById('imgTema').getAttribute('src');

let trocarTema = (pagina)  =>{

        let button = document.getElementById('imgTema');
        let navbar = document.querySelector('#membros');
        let logo = document.querySelector('.Lg-theorytas')
        let logo2 = document.querySelector('#logo2')
        let carrosselButtonPrev = document.querySelector('.carrosselButtonPrev')
        let carrosselButtonNext = document.querySelector('.carrosselButtonNext')
    
        if (button.getAttribute('src') == imagemOriginal) {
            document.documentElement.style.setProperty('--dark-shades', 'white');
            document.documentElement.style.setProperty('--light-shades', '#1A1A1A');
            document.documentElement.style.setProperty('--black', 'white');
            navbar.style = "filter: invert(100%)";
            logo.src = "./Images/lightIcon.png";
            button.src = "./Images/theo.png";

            if(pagina == "index"){
                carrosselButtonPrev.style = "filter: invert(100%)";
                carrosselButtonNext.style = "filter: invert(100%)";
                }
            if(pagina == "sobre"){
                logo2.src = "./Images/lightIcon.png";
            }

        } else {
            document.documentElement.style.setProperty('--dark-shades', '#1A1A1A');
            document.documentElement.style.setProperty('--light-shades', 'white');
            document.documentElement.style.setProperty('--black', 'black');
            navbar.style = "filter: invert(-100%)";
            logo.src = "./Images/theoritas.png";
            button.src = imagemOriginal;

            if(pagina == "index"){
                carrosselButtonPrev.style = "filter: invert(-100%)";
                carrosselButtonNext.style = "filter: invert(-100%)";
            }
            if(pagina == "sobre"){
                    logo2.src = "./Images/theoritas.png";
                }
        }
    }