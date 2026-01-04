import es from './es.json'
import en from './en.json'

const LANGUAGE: LangCode = window.navigator.language.split('-')[0] as LangCode

const LANGUAGE_LIST = { es, en }

type LangCode = keyof typeof LANGUAGE_LIST
type Key = keyof (typeof LANGUAGE_LIST)[LangCode]

function getTranslation(code: LangCode, key: Key): string {
  return LANGUAGE_LIST[code][key] ?? LANGUAGE_LIST.en[key] ?? key
}

document.querySelectorAll('[key-lang]').forEach((node) => {
  const key: Key = node.getAttribute('key-lang') as Key
  node.textContent = getTranslation(LANGUAGE, key)
  node.removeAttribute('key-lang')
})

document.querySelectorAll('[title]').forEach((node) => {
  const key: Key = node.getAttribute('title') as Key
  node.setAttribute('title', getTranslation(LANGUAGE, key))
})
