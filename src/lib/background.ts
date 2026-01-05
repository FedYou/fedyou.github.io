import JSON from '../data/background.json'

const WIDTH = document.body.offsetWidth
const HEIGHT = document.body.offsetHeight

const WORDS = JSON.words
const CHARS = JSON.chars
const COLORS = JSON.colors

const ELEMENTS_TOTAL = 600
const MIN_WIDTH_CHANGE = 725
const MAX_WORDS = 20
let WORDS_COUNT = 0

const ELEMENTS_DISPLAY: HTMLElement[] = []

const cont = document.getElementById('background') as HTMLElement

function getPorcent(value: number, total: number) {
  return (value / total) * 100
}

function randomPosition() {
  return {
    x: getPorcent(Math.random() * WIDTH, WIDTH),
    y: getPorcent(Math.random() * HEIGHT, HEIGHT)
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

  element.style.color = `var(--${randomColor()})`
  if (Math.round(Math.random() * 1) === 1) {
    element.style.left = x + '%'
  } else {
    element.style.right = x + '%'
  }
  element.style.top = y + '%'
  cont.appendChild(element)
  return element
}

for (let x = 0; x < ELEMENTS_TOTAL; x++) {
  if (x < 300) {
    ELEMENTS_DISPLAY.push(addElement(randomPosition()))
    continue
  }
  addElement(randomPosition())
}

function eachDisplayElements(list: HTMLElement[], display: 'none' | 'block') {
  list.forEach((element) => (element.style.display = display))
}

function update() {
  if (document.body.offsetWidth < MIN_WIDTH_CHANGE) {
    eachDisplayElements(ELEMENTS_DISPLAY, 'none')
    return
  }
  eachDisplayElements(ELEMENTS_DISPLAY, 'block')
}

document.body.onresize = () => update()

update()
