import es from './es.json'
import en from './en.json'

const languageList = { es, en }

type Lang = keyof typeof languageList
type Key = keyof (typeof languageList)[Lang]

const language: Lang = window.navigator.language.split('-')[0] as Lang
const elements = document.querySelectorAll('[key-lang]')
elements.forEach((element) => {
  const key: Key = element.getAttribute('key-lang') as Key
  element.textContent = languageList[language][key] ?? en[key]
})
