<template>
  <div>
    <section id="img">
      <img src="../../src/assets/bg1.jpg" alt="" />
    </section>
    <section id="hero">
      <section id="introduction">
        <h2>什么是工匠精神？</h2>
        <p>
          工匠精神是一种职业精神，它是职业道德、职业能力、职业品质的体现，是从业者的一种职业价值取向和行为表现。工匠精神的基本内涵包括敬业、精益、专注、创新等方面的内容。它是一种追求卓越的创造精神、精益求精的品质精神、用户至上的服务精神。
        </p>
        <h2>工匠精神的意义</h2>
        <p>
          工匠精神不仅代表着中国制造的高水平，也体现了中国文化的精髓。它是社会文明进步的重要尺度，是中国制造前行的精神源泉，是企业竞争发展的品牌资本，更是员工个人成长的道德指引。
        </p>
        <h2>工匠精神的内涵</h2>
        <p>
          敬业、精益、专注、创新是工匠精神的主要内涵。我们希望通过工匠之道网站的推广，让更多的人认识和了解工匠精神，将这种价值观念传递给更多的人。
        </p>
      </section>
    </section>

    <section id="features">
      <h2>工匠精神的特征</h2>
      <div class="container1">
        <div class="feature">
          <h3>敬业</h3>
          <p>
            敬业是指从业者具有对自己所从事的职业的高度热爱和投入，忠诚于自己的职业。敬业的人会认真学习专业知识和技能，积极探究并解决问题，不断提升自己的工作能力和水平。他们认为工作是一种责任和使命，对待工作始终保持高度的热情和态度，追求卓越和完美。
          </p>
        </div>

        <div class="feature">
          <h3>精益</h3>
          <p>
            精益是指从业者具有精益求精的品质精神，注重细节，追求完美。精益的人会在工作中追求极致的效率和质量，不断寻找并改进工作流程，优化生产方式。他们注重每一个环节的细节和品质，通过精益求精的努力，持续提高产品和服务的质量和价值。
          </p>
        </div>

        <div class="feature">
          <h3>专注</h3>
          <p>
            专注是指从业者具有高度的专业性和专注力，关注细节和全局。专注的人会深入了解自己所从事的领域和行业，对于自己所做的工作有清晰的认识和把握。他们注重细节，了解产品和服务的全貌，能够从整体的角度出发，为客户提供更优质的服务。
          </p>
        </div>

        <div class="feature">
          <h3>创新</h3>
          <p>
            创新是指从业者具有创新思维和实践能力，能够不断开拓新局面，推动行业的发展。创新的人会关注市场需求和客户反馈，通过技术和管理手段的创新，提高产品和服务的附加值，满足客户多元化的需求。他们不断探索和尝试新的方法和途径，使企业保持竞争优势和创新驱动力。
          </p>
        </div>
      </div>
    </section>
    <section id="intro">
      <h2>著名工匠精神人物介绍</h2>
      <div class="container2">
        <div class="card">
          <div class="photo">
            <img src="../../src/assets/lijiacheng (3).jpg" />
          </div>
          <h1>李嘉诚 Li Ka-shing</h1>
          <h2>世界最具影响力十大华商人物</h2>
          <p>
            李嘉诚，汉族，1928年7月29日出生于广东潮州潮安县，祖籍广东潮汕地区
          </p>
          <router-link to="lijiacheng">了解更多</router-link>
        </div>
        <div class="card">
          <div class="photo">
            <img src="../../src/assets/mahuateng (2).jpg" />
          </div>
          <h1>马化腾 Pony</h1>
          <h2>腾讯小马哥</h2>
          <p>
            马化腾，汉族，1971年10月29日生于广东省东方县八所港，广东省汕头市潮南区人。
          </p>
          <router-link to="mahuateng">了解更多</router-link>
        </div>
        <div class="card">
          <div class="photo">
            <img src="../../src/assets/aiaiguo (1).jpg" />
          </div>
          <h1>艾爱国 Ai Aiguo</h1>
          <h2>全国十大杰出工人</h2>
          <p>艾爱国，男，汉族，1950年3月生，1985年6月入党，湖南攸县人。</p>
          <router-link to="aiaiguo">了解更多</router-link>
        </div>
        <div class="card">
          <div class="photo">
            <img src="../../src/assets/jobs.jpg" />
          </div>
          <h1>史蒂夫·乔布斯</h1>
          <h2>苹果教父</h2>
          <p>
            史蒂夫·乔布斯（Steve
            Jobs，1955年2月24日—2011年10月5日），美国发明家、企业家，苹果公司联合创始人。
          </p>
          <router-link to="jobs">了解更多</router-link>
        </div>
      </div>
      <router-link to="Share"><h3>更多著名工匠精神人物</h3></router-link>
    </section>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
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
  height: 50px;
  width: 100%;
  z-index: 10;
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

#hero {
  min-height: 700px;
  background: url(../../src/assets/dyw1013_bg1.jpg) no-repeat;
}

#img img {
  width: 100%;
}

#introduction {
  width: 70%;
  margin: 0 auto;
  padding: 60px;
  font: 26px "微软雅黑";
  line-height: 44px;
  color: #693123;
}

#introduction p {
  font-size: 22px;
  font-weight: 540;
  text-indent: 2em;
}

#introduction h2 {
  font: 40px "标题";
  font-weight: 600;
  margin: 20px auto;
  text-align: center;
}

#features {
  width: 100%;
  margin: 0 auto;
  background: url(../../src/assets/dyw1013_bg2.jpg) no-repeat;
  background-position-y: 101%;
}

#features h2 {
  margin: 20px auto;
  text-align: center;
  font: 40px "标题";
  font-weight: 600;
  line-height: 44px;
  color: #693123;
}

.container1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  height: 100vh;
}

.feature {
  width: 45%;
  height: 300px;
  padding: 20px;
  margin: 5px 5px;
  border: 1px #333 dashed;
  border-radius: 2%;
  background-color: #f8ebcd;
}

.feature h3 {
  font-size: 35px;
  margin-bottom: 12px;
  text-align: center;
  font-family: "标题";
}

.feature p {
  font-size: 18px;
  line-height: 32px;
  text-indent: 2em;
}

/* 人物介绍板块 */
#intro {
  background-color: #f3e1bd;
}

#intro > h2 {
  padding-top: 20px;
  text-align: center;
  font: 40px "标题";
  font-weight: 550;
  line-height: 44px;
  color: #34495e;
}

.container2 {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif, Arial, "Microsoft Yahei";
}

.card {
  /* flex布局下元素不按比例缩放 */
  flex-shrink: 0;
  flex-grow: 0;
  position: relative;
  width: 300px;
  height: 450px;
  overflow: hidden;
  margin: 20px;
  background-color: #123659;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* flex 子元素 纵向排列 */
  flex-direction: column;
  /* 增加个阴影 */
  box-shadow: 0 0 30px #2c2c2c;
  /* 同意给字体价格颜色 */
  color: #ffb803;
}

.card .photo {
  position: absolute;
  /* 默认为放大 */
  width: 100%;
  height: 100%;
  top: 0px;
  border-radius: 0%;
  overflow: hidden;
  transition: 0.5s;
}

.card .photo::before {
  /* 通过before增加渐变背景实现遮罩，让文字默认看起来清晰一些 */
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, #333, transparent);
}

.card:hover .photo::before {
  /* 缩小时隐藏 */
  display: none;
}

.card .photo img {
  /* 图片高宽均为100% */
  /* 然后按照cover缩放，裁切长边 */
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card:hover .photo {
  /* 鼠标移上变小 */
  width: 120px;
  height: 120px;
  top: 30px;
  border-radius: 50%;
  box-shadow: 0 0 20px #111;
}

.card h1 {
  position: absolute;
  top: 380px;
  transition: 0.5s;
}

.card:hover h1 {
  position: absolute;
  top: 170px;
}

.card h2 {
  margin-top: 220px;
  width: 80%;
  font-weight: normal;
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #8ea2b8;
}

.card p {
  width: 90%;
  /* 段落缩进2个字符大小 */
  text-indent: 2em;
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 25px;
}

.card a {
  color: #ffb803;
  text-decoration: none;
  padding: 12px 36px;
  border: 1px solid #86a3b3;
  border-radius: 8px;
}

.card a:hover {
  color: #fff;
  background-color: #86a3b3;
}

#intro h3 {
  text-align: right;
  margin-right: 110px;
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 20px;
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