import {PassGen} from './modules/PassGen/PassGen'
import './modules/select/styles.scss'
import './index.scss'

const pass = new PassGen('#PassGen', {
    selectData: [6, 20],
    lowercase: true,
    uppercase: true,
    number: true
})

window.p = pass

if (module.hot) {
    module.hot.accept()
}
