/*!
 * Created by j on 2019-01-26.
 */

import Vue from 'vue'
import message from './message'

let vm

const options = {
    data:
         {
            show: false,
            title: '',
            msg: '',
    },
    render (h) {
        return h(message, {props: {show: this.show, title: this.title, msg: this.msg}})
    }
}


function getInstance () {
    if (!vm) {
        vm = vm || new Vue(options)
        vm.$mount(document.createElement('div'))
        document.body.appendChild(vm.$el)
    }
    return vm
}

vm = getInstance()

function $msg (opt) {
    vm = getInstance()
    vm.msg = opt.msg
    vm.title = opt.title
    vm.show = true

    setTimeout(() => {
        vm.show = false
    }, opt.duration || 3000)
}


export default function (opt) {
    if(typeof opt === 'string') {
        opt = {msg: opt}
    }
    $msg(opt)
}
