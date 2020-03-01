<template>
  <div>
    <div class="container">
      <!-- 头部的详情页面 -->
      <div class="conTop">
        <div class="topLeft"></div>
        <div class="topCenter">
          <img :src="headInfo.detail.img" class="showImg" />
        </div>
        <div class="topRight">
          <!-- 右边的图片内容 -->
          <span>
            <img :src="headInfo.storeInfo.head" />
          </span>
          <span>{{headInfo.storeInfo.store_name}}</span>
          <p>
            商品名称：
            <span>{{headInfo.goods_name}}</span>
          </p>
          <p>
            <span>原价：</span>
            <span class="oldPrice">{{headInfo.old_price}}</span>
          </p>
          <p>
            <span>现价：</span>
            <span class="nowPrice">{{headInfo.price}}</span>
          </p>
          <p>
            省份：
            <select name="provice_name">
              省份
              <option value="北京">北京市</option>
              <option value="南京">南京市</option>
            </select>
            <span>地区</span>
            <select name="area">
              <option value="朝阳区">朝阳区</option>
              <option value="昌平区">昌平区</option>
            </select>
          </p>
          <p>
            <button class="jian">-</button>
            <input type="text" value="1" class="num" />
            <button class="jia">+</button>
          </p>
          <p>
            <button>收藏</button>
            <button id="jiaRuGouWuChe">加入购物车</button>
          </p>
        </div>
      </div>
      <p id="showData" v-html="imgInfobig">
        <!-- 显示详情大图 -->
      </p>
      <!-- 推荐项目 -->
      <div class="recommend">
        <dl
          v-for="(item,index) in shopRecCon"
          :key="index"
          :pid="item.goods_id"
          @click="change(item.goods_id)"
        >
          <dt>
            <img :src="item.image" />
          </dt>
          <dd>{{item.goods_name}}</dd>
          <dd>
            原价:
            <span class="oldVal">{{item.old_price}}</span>元,现价:
            <span class="nowVal">{{item.price}}</span>元
          </dd>
          <dd>
            销量：
            <span>{{item.pay_num}}</span>件
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { informationForshop } from "../api";
export default {
  data() {
    return {
      con: [],
      shopId: this.$route.query.goods_id,
      shopRecCon: [],
      imgInfobig: "",
      headInfo: ""
    };
  },
  created() {
    informationForshop(this.shopId).then(res => {
      (this.shopRecCon = res.data.result.data.recommend),
        (this.headInfo = res.data.result.data),
        (this.imgInfobig = res.data.result.data.detail.in_detail);
    });
  },
  methods: {
    change(goods_id) {
      this.$router.push({
        //核心语句
        path: "/detail",
        query: { goods_id } //跳转的路径
      }),
        location.reload();
    }
  }
};
</script>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}

.conTop {
  width: 1000px;
  height: 300px;
  border: 1px solid;
}

.topLeft {
  width: 100px;
  height: 300px;
  float: left;
  background: beige;
}

.topCenter {
  width: 298px;
  height: 298px;
  float: left;
  background: darkkhaki;
  border: 1px solid;
}

.topCenter img {
  width: 100%;
  height: 100%;
}

.topRight {
  width: 600px;
  height: 298px;
  float: right;
  background: palegoldenrod;
}

.topRight img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.jia,
.jian,
.num {
  width: 24px;
  height: 24px;
  /* border: none; */
}

#showData {
  margin: 0 auto;
  width: 1000px;
}

#showData img {
  width: 100%;
}

.recommend {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.recommend dl {
  box-sizing: border-box;
  width: 190px;
  height: 280px;
  border: 1px solid;
  text-align: center;
  margin-top: 5px;
}

.recommend dl img {
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

.recommend dd .oldVal {
  text-decoration: line-through;
  color: dimgray;
}

.recommend dd .nowVal {
  color: red;
  font-size: 12x;
}

.ind02 {
  width: 75px;
  height: 280px;
  background: #ccc;
  margin: 0 auto;
  padding: 10px;
}
</style>
