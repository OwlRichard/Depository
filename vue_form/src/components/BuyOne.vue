<template>
  <div class="hello">
    <!-- <my-input :value="value" @input='value = arguments[0]'></my-input> -->
    <my-form :model='model' :rules='rules'>
      <my-form-item label="用户名" prop="username">
        <my-input v-model="model.username" type='text'></my-input>
      </my-form-item>

      <my-form-item label="密码" prop="password">
        <my-input v-model="model.password" type='password'></my-input>
      </my-form-item>
    </my-form>
    <br/>
    <span>微风吹过的夏天</span>
    <br/>
    <el-button>element 我来了</el-button>
  </div>
</template>

<script>
import MyInput from './Input'
import MyFormItem from './FormItem'
import MyForm from './Form'

export default {
  name: 'BuyOne',
  components: {
    MyInput,
    MyFormItem,
    MyForm
  },
  data () {
    return {
      value: '',
      model: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message:'请输入用户名',
          min:6, max:12,message:"请输入6-12位的用户名"}
        ],
        password: [
          { required: true, message:"请输入密码"}
        ]
      }
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
