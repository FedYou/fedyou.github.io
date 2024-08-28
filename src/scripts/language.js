import es from "../lang/es.json" assert { type: "json" };
import en from "../lang/en.json" assert { type: "json" };
const elements = document.querySelectorAll("[key-lang]");

elements.forEach((element) => {
  const key = element.getAttribute("key-lang");
  element.textContent = es[key] ?? en[key];
});
