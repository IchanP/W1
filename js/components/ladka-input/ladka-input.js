const template = document.createElement('template')

template.innerHTML = `

<form>
<label for="translationInput">Translate This</label>
<input type="text" id="translationInput" name="translationInput">
<button type="submit" >Submit</button>
</form>
`

class TranslationInput extends HTMLElement {


    #translationInput
    constructor() {
        super()
        this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

        this.#translationInput = null
    }

    connectedCallback() {
        this.form = this.shadowRoot.querySelector('form')
        this.input = this.shadowRoot.querySelector('#translationInput')

        this.form.addEventListener('submit', (event) => {
            event.preventDefault()
            if (this.input.value !== '') {
                console.log('Input event listener triggered')
                this.#translationInput = this.input.value
                const submitTranslation = new CustomEvent('submitTranslation', {data: {translationInput: this.#translationInput}})
                this.dispatchEvent(submitTranslation)
            }
        })

    }
}

customElements.define('ladka-input', TranslationInput)