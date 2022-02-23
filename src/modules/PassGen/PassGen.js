import {templatePassGen} from './templatePassGen'
import {Select} from '@/modules/select/select'
import {arrayDataSelect, copyText} from '@/assets/functions'
import {generator} from './generator'

export class PassGen {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.selectData = options.selectData ?? [6, 20]
        this.$passInput = ''
        this.$passgen = ''
        this.inputCheck = []
        this.#setup()
    }

    #setup() {
        this.open = this.open.bind(this)
        this.$el.addEventListener('click', this.open)
    }

    clickHandler(event) {
        const {type} = event.target.dataset
        const closeBtn = event.target.closest('[data-type="close"]')

        if (type === 'generator-btn') {
            this.$selectValue = document.querySelector('[data-type="value"]').textContent
            generator(this.$selectValue, this.$passInput, this.inputCheck)
        } else if (type === 'copy-btn') {
            copyText(this.$passInput)
        } else if (closeBtn) {
            this.close()
        }

    }

    open() {
        document.body.insertAdjacentHTML('afterbegin', templatePassGen())
        new Select('#select', {
            placeholder: '6',
            selectedId: '12',
            data: arrayDataSelect(this.selectData),
            onSelect(item) {
                // console.log(item)
            }
        })

        this.$passgen = document.querySelector('#passgen-bg')
        this.$passInput = this.$passgen.querySelector('[data-type="pass-value"]')
        this.inputCheck = Array.from(this.$passgen.querySelectorAll('input[type=checkbox]'))

        this.clickHandler = this.clickHandler.bind(this)
        this.$passgen.addEventListener('click', this.clickHandler)
    }

    close() {
        this.$passgen.removeEventListener('click', this.clickHandler)
        this.$passgen.remove()
    }
}
