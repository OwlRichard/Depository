<template>
  <div class="hello">
    <div>
      万丈红尘
    </div>
    <h1>{{title}}</h1>
    <hr>
    <div>上架商品</div>
    <label for="">
      商品名称：
      <input type="text" v-model="courseInfo.name" name="" id="">
    </label>
    <br>
    <label for="">
      商品价格：
      <input type="text" v-model="courseInfo.price" name="" id="">
    </label>
    <br>
    <button @click="addCourseToList">添加到展示货架</button>

    <hr>
    <table>
      <tr>
        <th>商品名称</th>
        <th>商品价格</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item, index) in courseList" :key="'vbh'+item.id">
        <th>{{item.name}}</th>
        <th>{{item.price}}</th>
        <th><button @click="addCourse(index)">添加到购物车</button></th>
      </tr>
    </table>
    <hr>
    <buy-list :courseItem='courseItem' @minus='minus' @add='add'></buy-list>
  </div>
</template>

<script>
import BuyList from './BuyList'
export default {
  name: 'BuyOne',
  components: {
    BuyList
  },
  data () {
    return {
      title: '购物车',
      courseInfo: {
        name: '',
        price: ''
      },
      // 购物车列表
      courseItem: [
        {
          id: 0,
          name: '红富士',
          price: 5987,
          number: 1,
          isActive: true
        }
      ],
      courseList: [
        {
          id: 0,
          name: '红富士',
          price: 5987
        },
        {
          id: 1,
          name: '袋鼠',
          price: 9989
        }
      ]
    }
  },
  methods: {
    addCourseToList(){
      this.courseList.push(this.courseInfo)
    },
    addCourse(index) {
      console.log(index)
      let item = this.courseList[index];
      let isHasCourse = this.courseItem.find(x => x.id === item.id);
      if (isHasCourse) {
        isHasCourse.number++
      }else{
        this.courseItem.push({
          ...item,
          number: 1,
          isActive: true
        })
      }
    },
    minus(index){
      if (this.courseItem[index].number>1) {
        this.courseItem[index].number--
      }else if(window.confirm('确定要删除吗？')){
        this.courseItem.splice(index,1);
      }
      
    },
    add(index){
      this.courseItem[index].number++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
