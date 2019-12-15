<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
export default {
    provide(){
        return {
            myForm: this
        }
    },
    props: {
        model: {
            type: Object,
            required: true
        },
        rules: {
            type: Object,
        }
    }
}
</script>

<style lang="">
    
</style>