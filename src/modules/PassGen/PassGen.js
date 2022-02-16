import {templatePassGen} from './templatePassGen'
import {Select} from '@/modules/select/select'
import {arrayDataSelect} from '@/assets/functions'
import {generator} from './generator'

export class PassGen {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.selectData = options.selectData ?? [6, 20]
        this.options = options
        this.#setup()
    }

    #setup() {
        this.open = this.open.bind(this)
        this.$el.addEventListener('click', this.open)
    }

    clickHandler(event) {
        const {type} = event.target.dataset
        if (type === 'generator-btn') {
            this.$selectValue = document.querySelector('[data-type="value"]').textContent
            generator(this.options, this.$selectValue)
        }
    }

    open() {
        document.body.insertAdjacentHTML('afterbegin', templatePassGen())
        new Select('#select', {
            placeholder: '6',
            selectedId: '12',
            data: arrayDataSelect(this.selectData),
            onSelect(item) {
                // selectValue(item.value)
            }
        })
        this.$passgen = document.querySelector('#passgen-bg')
        this.clickHandler = this.clickHandler.bind(this)
        this.$passgen.addEventListener('click', this.clickHandler)
    }

    close() {
        this.$passgen.removeEventListener('click', this.clickHandler)
    }
}
