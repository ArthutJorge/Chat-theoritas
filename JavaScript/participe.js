var translations = {
    pt: {
          participe: "Participe",
          formText: "Form - Português",
          link: "https://forms.gle/YTyn8VSSECP728qD9"
    },
    en: {
          participe: "Join us",
          formText: "Form - English",
          link: "https://forms.gle/yLPedujnU61TCSx98"
        },
    es: {
          participe: "Participar",
          formText: "Form - Spanish",
          link: "https://forms.gle/59iVNysjcV2xTA2Y7"
    },
    fr: {
          participe: "Participer",
          formText: "Form - Francés",
          link: "https://docs.google.com/forms/d/1Rt_VSLblypf659zAtqu8DtzcRD66WCiraWfiPbNcDDA/"
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
    participeElement.innerHTML = `<button class="botao" onclick="openForm('${translations[language].link}')"  width="150" height="150" >${translations[language].formText}</button>`;
    }
      const url = `participe_${language}.html`;
      document.getElementById("content").innerHTML = `<iframe src="./Content/${url}" frameborder="0" width=1200 height="800"></iframe>`;
      localStorage.setItem("language", `${language}`);
}
window.onload = function() {
  updateLanguage(localStorage.getItem("language"));
}

function openForm(url) {
  window.open(url, "_blank");
}