import './components/ladka-input/index.js'
import './components/ladka-translator/index.js'

document.addEventListener('submitTranslation', (event) => {
  console.log(event.data)
  const textToTranslate = event.data
  const translateText = new CustomEvent('translateText', {data: { textToTranslate: textToTranslate}})
})