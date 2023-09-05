const template = customElements.define('template')

template.innerHTML = `

<div id="translatedWrapper">
    <p id="translatedText"></p>
</div>
`

class Translator extends HTMLElement {

    constructor () {
        super()
        this.attachShadow({mode: 'open' }).appendChild(template.content.cloneNode(true))
        this.#vowels = ['a', 'e', 'y', 'i', 'u','å', 'o', 'ä', 'ö']
        this.#consonants = ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
        
    }

    #separateWords(textToTranslate) {
     const words = textToTranslate.split(' ')
        return words
    }

    #seperateLetters(words) {
        const letters = words.split('')
        return letters
    }

    #
}