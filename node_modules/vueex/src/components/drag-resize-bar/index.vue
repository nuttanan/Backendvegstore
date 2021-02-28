<template>
    <div class="drag-resize-bar v">
    </div>
</template>

<script>
    import Draggable from '../../libs/draggable/index'

    export default {
        name: 'drag-resize-bar',
        props: {},
        data () {
            return {
                info: null
            }
        },
        mounted () {
            this.bindDrag()
        },
        destroyed () {
        },
        methods: {
            bindDrag () {
                let that = this
                let elm = this.$el
                new Draggable(elm, function (arg) {
                    that.$emit('resize', arg)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .h {
        width: 100%;
        height: 5px;
        cursor: row-resize;
    }

    .v {
        width: 10px;
        height: 100%;
        cursor: col-resize;
    }

    .drag-resize-bar {
        &:hover {
            background: #f0f0f0;
        }
    }
</style>