<template>
    <div class="vueex-menu">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'menuItem'
    }
</script>

<style lang="scss" scoped>
    .vueex-menu {
        display: flex;
        flex-flow: column;

        > * {
            &:hover {
                color: #fff;
                background: blue;
            }
        }
    }
</style>