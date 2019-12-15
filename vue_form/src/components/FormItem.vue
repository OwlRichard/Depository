<template>
    <div>
        <label for="">{{label}}</label>
        <div>
            <slot></slot>
            <p v-if="errStatus">{{errMessage}}</p>
        </div>
    </div>
</template>

<script>
import Schema from 'async-validator';

export default {
    inject: ['myForm'],
    props: ['label','prop'],
    data() {
        return {
            errMessage: '',
            errStatus: false
        }
    },
    mounted(){
        this.$on('validate',this.validator)
    },
    methods: {
        validator() {
            console.log(this.prop)
            let rules = this.myForm.rules[this.prop];
            let value = this.myForm.model[this.prop];
            console.log (rules)
            console.log (value)
            let descriptor = {[this.prop]:rules};
            let schema = new Schema(descriptor);
            // 校验输入值
            schema.validate({[this.prop]:value},errors => {
                if (errors) {
                    this.errMessage = errors[0].message;
                    this.errStatus = true;
                } else {
                    this.errMessage = '';
                    this.errStatus = false;
                }
            })
        }
    }
}
</script>