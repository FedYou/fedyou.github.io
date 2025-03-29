const TIME_LOADING = 2000
const TIME_FADE_OUT = 1000

setTimeout(() => {
  document.querySelector('.loading-screen').classList.add('fade-out')
  setTimeout(() => {
    document.querySelector('.loading-screen').remove()
  }, TIME_FADE_OUT)
}, TIME_LOADING)
