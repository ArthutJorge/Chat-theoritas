// IDIOMA CARROSSEL

var translations = {
  pt: {
        Arco1: "Ato II",
        url1: "https://docs.google.com/document/d/1Um4-CoaQp-Pomto-XjIVx1K8o4cDK6aXtKqRwkb8Z_E/edit?usp=sharing",

        Arco2: "Decadência",
        url2: "https://docs.google.com/document/d/1wSRlyPfOuZQ5ORGcYFhvZNM8xFDAwc4-Dld_orrmxC0/edit",

        Arco3: "Revelações",
        url3: "https://docs.google.com/document/d/1JdMBQWwpPCwLtChM5lZecrRoVTQydq7wOkltk3jMCYE/edit",

        Arco4: "Eleições",
        url4: "https://docs.google.com/document/d/1HyI1C3ROsFJIH02_ZLGZPItkws04mowtCb5uSfGm4Ag/edit",

        Arco5: "A traição",
        url5: "https://docs.google.com/document/d/1vop7DzGtzxG3gjNsvTENEt2SdKrDmzdMU-BLgwNaC6Q/edit",

        Arco6: "Chegada dos franceses",
        url6: "https://docs.google.com/document/d/14AQZtuckzZB_Tt6QVFfz35AGbbNa3WPWngNDN54p2w0/edit",

        Arco7: "Chegada dos brasileiros",
        url7: "https://docs.google.com/document/d/1krZ-a2dJcQL1wxau-oPPyOougUiCApKD-qDUf1R4DAg/edit?usp=sharing",

        Arco8: "Início do qsmp",
        url8: "https://docs.google.com/document/d/1BFPhjsjHX_0lRot2HeGKXL8u03VNgpUOwMn4bKXVlQg/edit?usp=sharing",

        Arco9: "Catálogo de entidades",
        url9: "https://docs.google.com/document/d/1j1ED9LcFd2O0r9Op7ABo_lyGv6MwQB5vL-z0psPwM4I/edit?usp=sharing",

        Arco10: "Lore intrapessoal",
        url10: "https://docs.google.com/document/d/1MnuM7Vb7Nxxw8EzkwXptsuOT-aw8VkRJZD65Lf022PQ/edit?usp=sharing",

        Arco11: "Biblioteca",
        url11: "https://docs.google.com/document/d/1rBqjs_1t-qCaU0yPZT9qpC4QpHd6m6I29vtbyoazAsw/edit?usp=sharing"
  },

  en: {
        Arco1: "Act II",
        url1: "-",

        Arco2: "Decadence",
        url2: "-",

        Arco3: "Revelations",
        url3: "-",

        Arco4: "Elections",
        url4: "-",

        Arco5: "The betrayal",
        url5: "-",

        Arco6: "Arrival of the French",
        url6: "-",

        Arco7: "Arrival of the Brazilians",
        url7: "-",

        Arco8: "The beginning of the QSMP",
        url8: "-",

        Arco9: "Entity catalog",
        url9: "-",

        Arco10: "intrapersonal lore",
        url10: "-",

        Arco11: "Library",
        url11: "-"
      },

  es: {
        Arco1: " Acto II",
        url1: "---",

        Arco2: "Decadencia",
        url2: "---",

        Arco3: "Revelaciones",
        url3: "---",

        Arco4: "Elecciones",
        url4: "---",

        Arco5: "La traición",
        url5: "---",

        Arco6: "Llegada de los franceses",
        url6: "---",

        Arco7: "Llegada de los brasileños",
        url7: "---",

        Arco8: "El comienzo del QSMP",
        url8: "---",

        Arco9: "Catálogo de entidades",
        url9: "---",

        Arco10: "Lore intrapersonal",
        url10: "---",

        Arco11: "Biblioteca",
        url11: "---"
  },
  fr: {
        Arco1: "Acte II",
        url1: "---",

        Arco2: "Décadence",
        url2: "---",

        Arco3: "Révélations",
        url3: "---",

        Arco4: "Élections",
        url4: "---",

        Arco5: "La trahison",
        url5: "---",

        Arco6: "Arrivée des Français",
        url6: "---",

        Arco7: "Arrivée des Brésiliens",
        url7: "---",

        Arco8: "Le début du QSMP",
        url8: "---",

        Arco9: "Catalogue d'entités",
        url9: "---",

        Arco10: "Lore intrapersonnelle",
        url10: "---",

        Arco11: "Bibliothèque",
        url11: "---"
  }
};

let updateLanguage = language =>{
  cards = document.querySelectorAll('.carousel-item')

  for(var i = 1; i<= cards.length; i++){
    
    cardP = document.getElementById(`p${i}`)
      cardP.innerHTML = translations[language][`Arco${i}`]
    
    cardHref = document.getElementById(`href${i}`)
      cardHref.setAttribute("href", `${translations[language][`url${i}`]}`)
    }

  localStorage.setItem("language", `${language}`);
  if(!first){
    location.reload()
  } else{
    first = false
  }
}

window.onload = function() {
  first = true
  language = localStorage.getItem("language")
  if(language == null){language = "pt"}
  updateLanguage(language);

  // CARROSSEL 

 $('.carousel .carousel-item').each(function(){
     var minPerSlide = 4;

    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first'); 
      	}
        next.children(':first-child').clone().appendTo($(this));
      }
});
  }




//01010011 01010100 01001111 01010000 00100000 01010000 01010010 01011001 01001001 01001110 01000111 00100000 00111010 00111110 