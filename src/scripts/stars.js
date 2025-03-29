const WIDTH = document.body.offsetWidth
const HEIGHT = document.body.offsetHeight
const STARS = 200
const WORDS =
  `JSON,Js,Ts,break,case,catch,class,const,continue,debugger,default,delete,do,else,enum,export,extends,false,finally,for,function,if,import,in,instanceof,new,null,return,super,switch,this,throw,true,try,typeof,var,void,while,with,yield,await,async,let,static,implements,interface,package,private,protected,public,arguments,eval,of`.split(
    ','
  )
let MAX_WORDS = 20
let WORDS_COUNT = 0
const CHARS = `{}[]();:.,+-*/%&|^!~=<>?"'\\\`@#<>?:&|!`.split('')
const cont = document.getElementById('stars.main')
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

function addStar({ x, y }) {
  const star = document.createElement('div')
  star.textContent = randomContent()
  star.classList.add('star')
  star.style.animationDuration = 4 + Math.random() * 20 + 's'
  if (Math.round(Math.random() * 1) === 1) {
    star.style.left = x + 'px'
  } else {
    star.style.right = x + 'px'
  }
  star.style.top = y + 'px'
  cont.appendChild(star)
}

for (let x = 0; x < STARS; x++) {
  addStar(randomPosition())
}
