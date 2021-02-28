<template>
    <div class="vueex-msg-wrapper" :class="{show: show}">
        <header>
            {{ title }}
        </header>
        <div class="body">
            {{ msg }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'message',
        props: {
            show: Boolean,
            title: String,
            msg: String
        },
        data(){
            return {
               /* show: false,
                title: '',
                msg: ''*/
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/index";

    .vueex-msg-wrapper{
        position: fixed;
        z-index: 1000000;
        top:-140%;
        left: 40%;
        right: 40%;
        padding: 0.5em 1em;
        background: #fff;
        border: solid 1px $activeColor;
        box-shadow: #f0f0f0 10px 10px;
        transition: all 0.7s;
        display: flex;
        flex-flow: column;
        &.show{
            top: 20%;
        }
        header{

        }
        .body{
            flex: 1;
            padding: 0.5em;
            color: $activeColor;
            text-align: center;
        }
    }
</style>
