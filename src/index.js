import './index.scss'

import {Select} from './modules/select/select'
import './modules/select/styles.scss'

new Select('#select', {
    placeholder: 'select item',
    selectedId: '12',
    data: [
        {id: '6', value: '6'},
        {id: '8', value: '8'},
        {id: '10', value: '10'},
        {id: '12', value: '12'},
        {id: '14', value: '14'},
        {id: '16', value: '16'},
        {id: '18', value: '18'},
        {id: '20', value: '20'}
    ],
    onSelect(item) {
        console.log('select Item', item)
    }
})

// if (module.hot) {
//     module.hot.accept()
// }
