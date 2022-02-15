import {templatePassGen} from './templatePassGen'
import {Select} from '@/modules/select/select'
import {arrayDataSelect} from '@/assets/functions'

export class PassGen {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.selectData = options.select
        this.#setup()
    }

    #setup() {
        this.$el.addEventListener('click', this.open)
    }

    clickHandler(event) {

    }

    open() {
        document.body.insertAdjacentHTML('afterbegin', templatePassGen())
        new Select('#select', {
            placeholder: '2',
            selectedId: '12',
            data: arrayDataSelect([6, 20]),
            onSelect(item) {
                console.log('Select Item', item)
            }
        })
    }

    close() {

    }
}
