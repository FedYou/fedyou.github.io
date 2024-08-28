import es from "../lang/es.json" assert { type: "json" };
import en from "../lang/en.json" assert { type: "json" };
const languageList = { es, en };
const language = (window.navigator.language || navigator.browserLanguage).split(
  "-"
)[0];
const elements = document.querySelectorAll("[key-lang]");
elements.forEach((element) => {
  const key = element.getAttribute("key-lang");
  element.textContent = languageList[language][key] ?? en[key];
});
