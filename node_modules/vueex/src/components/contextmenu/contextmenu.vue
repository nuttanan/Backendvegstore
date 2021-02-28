<template>
    <div class="vueex-contextmenu" v-if="ev" :style="style">
        <slot>
        </slot>
    </div>
</template>

<script>
    export default {
        name: 'contextmenu',
        props: {
            value: false,
        },
        data () {
            return {
                ev: false,  // contextmenu event
                visible: false,
                style: {}  // dom element position
            }
        },
        methods: {
            _style () {
                let obj = {}
                if (this.ev) {
                    obj = this.xy(this.ev)
                    obj.transform = 'translate(0, 0)'
                }
                return obj
            },
            xy (e) {
                let gap = 20
                let cx = e.clientX
                let cy = e.clientY
                let x = cx
                let y = cy
                let vw = window.innerWidth
                let vh = window.innerHeight
                let ew = this.$el.offsetWidth
                let eh = this.$el.offsetHeight
                if (cx + ew - vw > 0) {
                    x = cx - (cx + ew - vw) - gap;
                }
                if (cy + eh - vh > 0) {
                    y = cy - (cy + eh - vh) - gap;
                }
                return {left: `${ x }px`, top: `${ y }px`}
            },
            cancelContextmenu (e) {
                console.info('cancelContextmenu', e)
                this.ev = false
                this.visible = false;
                this.style = {}
                this.$emit('input', false)
            }
        },
        watch: {
            value (e) {
                this.ev = e
                if (e) {
                    this.$nextTick(() => {
                        this.style = this._style()
                    })
                    document.addEventListener('click', this.cancelContextmenu, false)
                    document.addEventListener('scroll', this.cancelContextmenu, true)
                    document.addEventListener('contextmenu', this.cancelContextmenu, true)
                } else {
                    document.removeEventListener('click', this.cancelContextmenu, false)
                    document.removeEventListener('scroll', this.cancelContextmenu, true)
                    document.removeEventListener('contextmenu', this.cancelContextmenu, true)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vueex-contextmenu {
        position: fixed;
        z-index: 10001;
        top: 0;
        left: 0;
        display: flex;
        padding: 0.5rem 0;
        background: #fff;
        min-height: 75px;
        min-width: 3em;
        box-shadow: #9f9f9f 3px 3px 10px;
        border-radius: 0.25rem;
        transform: translate(-10000px, 0);
    }
</style>
