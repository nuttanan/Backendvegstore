/*!
 * 
 * Created by j on 2019-01-20.
 */

import Vue from 'vue'
import contextmenu from '../components/contextmenu/contextmenu.vue'

let onMouseDown = function (e) {
    e.preventDefault();

    let target = e.target




}

let _init = () => {
    document.addEventListener('mousedown', onMouseDown, false)
}

let destroy = () => {
    document.removeEventListener('mousedown', onMouseDown, false)
}

export default function () {
    _init && _init()
    _init = null    // once
    return destroy
}