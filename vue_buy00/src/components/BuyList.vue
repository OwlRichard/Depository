<template>
  <div class="buyList">
    <div>购物车</div>
    <table>
        <tr>
            <th>勾选</th>
            <th>商品名称</th>
            <th>商品价格</th>
            <th>商品数量</th>
            <th>总价</th>
        </tr>
        <tr v-for="(item, index) in courseItem" :key="'pkf'+index">
            <td>
                <input type="checkbox" v-model='item.isActive'>
            </td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>
                <button @click="minus(index)">-</button>
                {{item.number}}
                <button @click="add(index)">+</button>    
            </td>
            <td>{{item.number * item.price}}</td>
        </tr>
        <tr>
            <td></td>
            <td>{{isActiveCourse}}/{{allCourseNum}}</td>
            <td>{{allPrice}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BuyList',
  props: ['courseItem'],
  computed: {
    isActiveCourse() {
        return this.courseItem.filter(item=>item.isActive).length;
    },
    allCourseNum() {
        return this.courseItem.length;
    },
    allPrice() {
        let num = 0;
        this.courseItem.forEach(element => {
            if(element.isActive){
                num += element.price * element.number;
            }
        });
        return num;
    }
  },
  data () {
    return {
      msg: '购物车'
    }
  },
  methods: {
      minus(index){
        this.$emit('minus',index)
      },
      add(index){
          this.$emit('add',index)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
