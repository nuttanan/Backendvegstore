<template>
    <div class="popup-wrap" v-show="visible" v-if="!exit">
        <div class="mask" @click="close"></div>
        <div class="popup">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'popup',
        props: {
            value: {
                type: Boolean,
                default: true
            }
        },
        data(){
           return {
               exit: false,
               visible: this.value
           }
        },
        methods: {
            close() {
                this.visible = false
                this.$emit('input', false);
            },
            confirm() {

            },
            cancel() {
                this.closePopup()
                this.$emit('cancel')
            }
        },
        watch: {
            value : function (val) {
                console.log(val)
                this.visible = val
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/_basic.scss";

    .popup-wrap{
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index: 1000;

        .mask{
            position: absolute;
            width:100%;
            height:100%;
            background: rgba(0,0,0, 0.2);
        }
        .popup{
            position: absolute;
            top: 50%;
            left:50%;
            transform: translate(-50%, -60%);
            background: #fff;
            min-width: 40%;
            min-height:40px;
            border-radius: $gap;
            //border: solid 1px #929191;
            box-shadow: 3px 3px 10px #848383;
        }
    }
</style>