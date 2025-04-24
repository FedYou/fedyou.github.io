import JSON from '../data/background.json'

const WIDTH = document.body.offsetWidth
const HEIGHT = document.body.offsetHeight

const WORDS = JSON.words
const CHARS = JSON.chars
const COLORS = JSON.colors

const ELEMENTS = WIDTH < 550 ? 300 : 600
const MAX_WORDS = 20
let WORDS_COUNT = 0

const cont = document.getElementById('background') as HTMLElement
function randomPosition() {
  return {
    x: Math.random() * WIDTH,
    y: Math.random() * HEIGHT
  }
}
function randomWord() {
  const index = Math.floor(Math.random() * WORDS.length)
  return WORDS[index]
}
function randomChar() {
  const index = Math.floor(Math.random() * CHARS.length)
  return CHARS[index]
}
function randomContent() {
  const index = Math.floor(Math.random() * 2)
  if (index == 0 && MAX_WORDS >= WORDS_COUNT) {
    WORDS_COUNT++
    return randomWord()
  }
  return randomChar()
}
function randomColor() {
  const index = Math.floor(Math.random() * COLORS.length)
  return COLORS[index]
}

function addElement({ x, y }: { x: number; y: number }) {
  const element = document.createElement('div') as HTMLDivElement
  element.textContent = randomContent()
  // styles
  element.style.position = 'absolute'
  element.style.zIndex = '0'
  element.style.opacity = '0.6'
  element.style.userSelect = 'none'
  element.style.fontFamily =
    "system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif"
  element.style.animationName = 'flicker'
  element.style.animationTimingFunction = 'ease-in-out'
  element.style.animationIterationCount = 'infinite'

  element.style.color = `var(--${randomColor()})`
  element.style.animationDuration = 4 + Math.random() * 20 + 's'
  if (Math.round(Math.random() * 1) === 1) {
    element.style.left = x + 'px'
  } else {
    element.style.right = x + 'px'
  }
  element.style.top = y + 'px'
  cont.appendChild(element)
}

for (let x = 0; x < ELEMENTS; x++) {
  addElement(randomPosition())
}
