var translations = {
    pt: {
          participe: "Participe",
          formText: "Form - Português"
    },
    en: {
          participe: "Join us",
          formText: "Form - English"
        },
    es: {
          participe: "Participar",
          formText: "Form - Spanish"
    },
    fr: {
          participe: "Participer",
          formText: "Form - Francés"
    }
  };
function updateLanguage(language) {
  const languageNameElement = document.getElementById("language-name");
  const participeElement = document.getElementById("participe");
  if (participeElement) {
      participeElement.textContent = translations[language].participe;
    }
  if (languageNameElement) {
    languageNameElement.textContent = translations[language][language];
  }
  if (participeElement) {
    participeElement.innerHTML = `<button class="botao" onclick="openForm('${translations[language].formUrl}')"  width="150" height="150" >${translations[language].formText}</button>`;
    }
       const url = `participe_${language}.html`;
  document.getElementById("content").innerHTML = `<iframe src="./Content/${url}" frameborder="0" width=1200 height="800"></iframe>`;
}
function onLoad() {
  updateLanguage('pt');
}

function openForm(url) {
  window.open(url, "_blank");
}