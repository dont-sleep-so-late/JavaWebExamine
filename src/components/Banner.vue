<template>
  <div>
    <header>
      <div class="container">
        <h1>工匠精神</h1>
        <nav>
          <ul>
            <li><router-link to="Index">首页</router-link></li>
            <li><router-link to="Share">人物分享</router-link></li>
            <li><a href="#">名家访谈</a></li>
            <li><a href="#">关于我们</a></li>
            <li>
              <div class="tool">
                <h1 id="showtime">{{ time }}</h1>
              </div>
            </li>
            <template v-if="token == null">
              <li><a href="#" @click="login">登录/注册</a></li>
            </template>
            <template v-else>
              <li>
                <span
                  ><a href="#" @click="logout">{{ helloUser }} 注销</a></span
                >
              </li>
            </template>
          </ul>
        </nav>
      </div>
    </header>

    <template>
      <router-view></router-view>
    </template>

    <footer>
      <div class="page_bottom">
        <div class="sub_pg_bottom">
          <p class="left">
            <router-link to="index"><span>首页</span></router-link>

            <router-link to="Share"><span>人物分享</span></router-link>

            <span><a href="#" target="_blank">名家访谈</a></span>

            <span><a href="#" target="_blank">关于我们</a></span>
          </p>
          <p class="right">
            <span>欧文聪 版权所有</span>
            <span
              ><a href="#" target="_blank">
                GOUD数学与计算机学院软卓1211</a
              ></span
            >
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
  data() {
    return {
      time: "12:00:00",
      timer: {},
      today: null,
      helloUser: null,
      token: null,
      username: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.getDate();
    }, 1000);
    this.token = window.sessionStorage.getItem("token");
    this.$http.defaults.headers.common["token"] =
      window.sessionStorage.getItem("token");
    this.username = window.sessionStorage.getItem("username");
  },
  methods: {
    twoDigits(val) {
      if (val < 10) return "0" + val;
      return val;
    },
    getDate() {
      var timezone = 8;
      var offset_GMT = new Date().getTimezoneOffset();
      var nowDate = new Date().getTime();
      this.today = new Date(
        nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000
      );
      this.time =
        this.twoDigits(this.today.getHours()) +
        ":" +
        this.twoDigits(this.today.getMinutes()) +
        ":" +
        this.twoDigits(this.today.getSeconds());

      this.hello();
    },
    hello() {
      var hours = this.today.getHours();

      if (hours <= 6) {
        this.helloUser = "凌晨好！";
      } else if (hours <= 12) {
        this.helloUser = "早上好！";
      } else if (hours <= 18) {
        this.helloUser = "下午好! ";
      } else if (hours < 24) {
        this.helloUser = "晚上好! ";
      }
      this.helloUser = this.helloUser + this.username;
    },
    login() {
      this.$router.replace("/Login");
    },
    logout() {
      this.$http.post("user/logout");
      delete this.$http.defaults.headers.common["token"];
      window.sessionStorage.clear();
      this.$message.success("注销成功");
      this.$router.replace("/Login");
    },
    destroyed() {
      // 销毁定时器
      clearInterval(this.timer);
    },
  },
};
</script>

<style src="../assets/css/base.css"></style>
<style scoped>
body {
  font-family: "PingFang SC", "Helvetica", "Arial", sans-serif;
  color: #333;
}
.container {
  width: 1400px;
  margin: 0 auto;
}

header {
  background-color: #fff;
  height: 60px;
  width: 100%;
  z-index: 10;
  border-bottom: 5px solid #c12125;
}

header h1 {
  color: #333;
  line-height: 50px;
  float: left;
  font-size: 26px;
}

header nav {
  float: right;
}

header nav ul li {
  float: left;
  line-height: 50px;
}

header nav ul li a {
  display: inline-block;
  padding: 0 20px;
  color: #333;
  font-size: 16px;
}
header nav ul li a:hover {
  color: red;
  font-weight: 600;
}

.tool h1 {
  font: 30px "标题";
  line-height: 50px;
}

footer {
  color: rgb(51, 51, 51);
  font-family: 宋体;
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  margin: 0;
  padding: 0;
}

footer .page_bottom {
  color: rgb(51, 51, 51);
  font-family: 宋体;
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  margin: 0;
  padding: 0;
  background: #f1f1f1;
  border-top: 5px solid #c12125;
}

footer .sub_pg_bottom {
  color: rgb(51, 51, 51);
  font-size: 14px;
  width: 1200px;
  margin: 0px auto;
  height: 51px;
}

footer .sub_pg_bottom .left {
  float: left;
  line-height: 51px;
}

footer .sub_pg_bottom .left span {
  margin-left: 20px;
}

footer span:hover a {
  color: black;
}

footer .sub_pg_bottom .right {
  float: right;
  line-height: 51px;
}
</style>