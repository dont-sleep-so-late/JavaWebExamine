<template>
  <div class="container" id="elecData_father">
    <vue-canvas-nest
      :config="config"
      :el="'#elecData_father'"
    ></vue-canvas-nest>
    <!-- 登录表单区域 -->
    <div class="login">
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        class="login-form"
        :rules="loginRules"
      >
        <div class="title-container">
          <h1>工匠精神</h1>
          <h4>CraftmanSpirit</h4>

          <!-- 用户名 -->
          <el-form-item prop="username">
            <el-input
              v-model.trim="loginForm.username"
              placeholder="用户名"
              name="username"
              type="text"
            />
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input
              v-model.trim="loginForm.password"
              placeholder="密码"
              name="password"
              type="password"
              @keyup.enter.native="validate"
            />
          </el-form-item>
          <!-- 验证码 -->
          <el-form-item prop="verifycode">
            <el-input
              v-model="user.verifycode"
              placeholder="请输入验证码"
              class="identifyinput"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <div class="identifybox">
              <div @click="refreshCode">
                <s-identify
                  :identifyCode="identifyCode"
                  :contentWidth="180"
                  :contentHeight="50"
                ></s-identify>
              </div>
              <el-button
                @click="refreshCode"
                type="text"
                class="textbtn"
                style="width: 50%; font-size: 20px"
                >看不清，换一张</el-button
              >
            </div>
          </el-form-item>
          <el-button
            type="primary"
            style="width: 100%; margin-bottom: 30px"
            @click.prevent="validate"
          >
            login
          </el-button>
          <el-button type="primary" @click="reg" style="margin-left: 0"
            >cancel</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import SIdentify from "../components/canvas.vue";
import vueCanvasNest from "vue-canvas-nest";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    /* 自定义验证码规则 */
    const validateVerifycode = (rule, value, callback) => {
      if (this.user.verifycode === "") {
        callback(new Error("请输入验证码"));
      } else if (this.user.verifycode !== this.identifyCode) {
        callback(new Error("验证码不正确!"));
      } else {
        callback();
      }
    };

    return {
      //配置属性
      config: {
        color: "255, 255, 255",
        opacity: 1,
        zIndex: 0,
        count: 99,
      },
      user: {
        verifycode: "",
      },
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [
          {
            required: true,
            trigger: "blur",
            message: "请输入用户名",
          },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
        verifycode: [
          {
            required: true,
            trigger: "blur",
            validator: validateVerifycode,
          },
        ],
      },
      identifyCodes: "1234567890abcdefghijklmnopqrstuvwxyz",
      identifyCode: "",
    };
  },
  components: {
    vueCanvasNest,
    SIdentify,
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);

    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function () {
      history.pushState(null, null, document.URL);
      window.history.forward(1);
    });

    history.pushState(null, null, document.URL);
    history.forward();
  },

  methods: {
    validate() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.post(
          "user/login",
          this.loginForm
        );
        if (res.code == 200) {
          this.$message.success("登录成功");
          window.sessionStorage.setItem("token", res.data.token);
          window.sessionStorage.setItem("username", this.loginForm.username);
          this.$router.push("/");
        } else {
          return this.$message.error(res.message);
        }
      });
    },
    reg() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.post("user/reg", this.loginForm);
        if (res.code == 200) {
          this.$message.success("注册成功");
          this.loginForm.username = null;
          this.loginForm.password = null;
          this.user.verifycode = null;
        } else {
          return this.$message.error(res.message);
        }
      });
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 切换验证码
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode +=
          this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
      }
    },
    check_num: function () {
      this.loginForm.password = this.loginForm.password.replace("");
    },
  },
};
</script>
<style scoped>
.container {
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  height: 100vh;
  width: 100%;
  background: #f3f3f5;
  background-size: 93%;
  justify-content: center;
  align-items: center;
}
.login {
  width: 400px;
  height: 650px;
}
h1 {
  font-size: 45px;
  text-align: center;
  font-family: "标题";
}
.title-container h4 {
  text-align: center;
  color: rgb(207, 207, 207);
  padding-bottom: 10px;
  font-size: 20px;
  font-family: "标题";
}
.el-input {
  font-size: 20px;
  width: 100%;
  margin-top: 20px;
}
.el-button {
  width: 100%;
  height: 50px;
  background-color: #1ab394;
  border: none;
  border-radius: 10px;
  color: #f3f3f5;
  font-size: 26px;
}
.el-button:hover {
  background-color: #1fddb7;
}
.identifybox {
  display: flex;
  justify-content: space-between;
  margin-top: 7px;
}
</style>