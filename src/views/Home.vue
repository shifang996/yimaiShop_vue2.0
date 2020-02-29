<template>
  <div>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <img :src="imgsrc" />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <div class="search_con">
            <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
            <div>
              <el-button type="danger">搜索</el-button>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <img :src="wechatLogo" />
        </div>
      </el-col>
    </el-row>
    <!-- 图片栏目 -->
    <el-col>
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <h1>热门推荐</h1>
        </div>
      </el-col>
    </el-col>
    <el-row>
      <el-col>
        <div class="grid-content bg-purple">
          <div class="container">
            <dl>
              <dt>
                <img :src="wechatLogo" />
              </dt>
              <dd>这是一个大的苹果</dd>
              <dd>
                原价:
                <span class="oldVal">100</span>元,价格:
                <span class="nowVal">45</span>元
              </dd>
              <dd>
                销量：
                <span>0</span>件
              </dd>
            </dl>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import "../assets/onload.css";
export default {
  data() {
    return {
      imgsrc: require("../assets/logo/shopLogo.png"),
      input: "",
      wechatLogo: "https://www.ymduo.com/static/img/topweixin.54d3f65.png",
      shopEg:
        "http://yimaiec.oss-cn-shanghai.aliyuncs.com/yimaiec/goods/201901_16092458768664.jpg?x-oss-process=style/kuan-free"
    };
  }
};
</script>
<style scoped>
.grid-content h1 {
  text-align: left;
}

.grid-content img {
  height: 100px;
  background: white;
}

.search_con {
  display: flex;
}

.reconLeader {
  text-align: left;
}

.container {
  margin: 0 auto;
  width: 1000px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.container dl {
  box-sizing: border-box;
  width: 190px;
  height: 280px;
  border: 1px solid;
  text-align: center;
  margin-top: 5px;
}
.container dl img {
  width: 185px;
  height: 200px;
}
dl dd:nth-child(2) {
  font-size: 10px;
  color: lightslategrey;
}
dl dd:nth-child(3) {
  font-size: 12px;
  color: gray;
}
dl dd:nth-child(4) {
  font-size: 10px;
  color: gray;
}
.container dd .oldVal {
  text-decoration: line-through;
  color: dimgray;
}
.container dd .nowVal {
  color: red;
  font-size: 12x;
}
</style>
