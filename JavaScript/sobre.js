
var translations = {
    pt: {
          sobreNos: "Sobre nós"
    },
    en: {
         sobreNos: "About us"
        },
    es: {
       sobreNos: "Sobre nosotros"
    },
    fr: {
         sobreNos: "À propos de nous"
    }
  };

function updateLanguage(language) {
  const languageNameElement = document.getElementById("language-name");
  const sobreNosElement = document.getElementById("sobre-nos");
 
  if (sobreNosElement) {
      sobreNosElement.textContent = translations[language].sobreNos;
    }

  if (languageNameElement) {
    languageNameElement.textContent = translations[language][language];
  }
  const url = `sobre_${language}.html`;
  document.getElementById("content").innerHTML = `<iframe src="./Content/${url}" frameborder="0" width="100%" height="100%"></iframe>`;
  localStorage.setItem("language", `${language}`);
}

window.onload = function() {
  updateLanguage(localStorage.getItem("language"));
}