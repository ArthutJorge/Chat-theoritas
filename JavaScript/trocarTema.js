button = document.getElementById('imgTema');
imagemOriginal = document.getElementById('imgTema').getAttribute('src');

darkMode = localStorage.getItem("dark-mode"); 

if (darkMode === "disabled") {
    button.src = imagemOriginal
} else {
    button.src = "./Images/theo.png"
}

trocarTema()

function trocarTema(){

        let button = document.getElementById('imgTema');

        let navbar = document.querySelector('#membros');
    
        if (button.getAttribute('src') == imagemOriginal) {
            document.body.classList.add('Light-theme')
            document.documentElement.style.setProperty('--dark-shades', 'white');
            document.documentElement.style.setProperty('--light-shades', '#1A1A1A');
            document.documentElement.style.setProperty('--black', 'white');
            navbar.style = "filter: invert(100%)";
            button.src = "./Images/DarkCucurucho.png";

            localStorage.setItem("dark-mode", "disabled");

        } else {
            document.body.classList.remove('Light-theme')
            document.documentElement.style.setProperty('--dark-shades', '#1A1A1A');
            document.documentElement.style.setProperty('--light-shades', 'white');
            document.documentElement.style.setProperty('--black', 'black');
            navbar.style = "filter: invert(-100%)";
            button.src = imagemOriginal;
            
        localStorage.setItem("dark-mode", "enabled");
        }
    }