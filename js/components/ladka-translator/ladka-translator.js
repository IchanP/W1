const template = document.createElement('template')

template.innerHTML = `

<div id="translatedWrapper">
    <p id="translatedText"></p>
</div>
`

class Translator extends HTMLElement {

    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
        this.vowels = ['a', 'e', 'y', 'i', 'u', 'å', 'o', 'ä', 'ö']
        this.consonants = ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']

    }

    #separateWords(textToTranslate) {
        const words = textToTranslate.split(' ')
        return words
    }

    #seperateLetters(words) {
        const letters = words.split('')
        return letters
    }

    #addRobberLanguage(wordTotranslate) {
        const lettersFromWord = this.#seperateLetters(wordTotranslate)
        for (const letter in lettersFromWord) {
            if (this.consonants.includes(letter)) {
                letter += 'o' + letter // adding o and letter again
            }
        }
        return lettersFromWord
    }

    connectedCallback() {
        this.addEventListener('translateText', (event) => {
            console.log('In the translator...')
            const robbedWords = []
            const allWords = this.#separateWords(event.data)
            for (const word in allWords) {
                const robbedWord = this.#addRobberLanguage(word)
                robbedWords.push(robbedWord)
            }
            const robbedText = robbedWords.join(' ')
            this.shadowRoot.querySelector('#translatedText').textContent = robbedText
        })

    }
}

customElements.define('ladka-translator', Translator)