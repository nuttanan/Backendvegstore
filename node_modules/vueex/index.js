/*!
 * vue extension.
 * Created by j on 2019-01-11.
 */

import popup from './src/components/popup/popup.vue'
import contextmenu from './src/components/contextmenu/contextmenu.vue'
import dragResizeBar from './src/components/drag-resize-bar/index.vue'

import $msg from './src/components/message/index'

import util from './src/util/index.js'

const func = {
    ...util,
    $msg
}

const components = {
    contextmenu,
    dragResizeBar,
    popup
}

const install = function (Vue, opts = {}) {
    const vp = Vue.prototype

    Object.keys(func).forEach((name) => {
        let fn = func[name]
        let alias = opts.alias && opts.alias[name]
        name = alias || name
        if (Vue.prototype[name]) {
            throw new Error(`命名冲突, Vue.prototype.${ name }已经存在, 可以通过options.alias.${ name }={rename}重新命名.`)
        } else {
            Vue.prototype[name] = fn
        }
    })

    // register components on global
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key])
    })

}


const API = {
    install
}

export default API

export {
    popup
}