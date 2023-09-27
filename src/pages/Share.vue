<template>
  <div>
    <section id="case-studies">
      <div class="container">
        <h2>经典案例分享</h2>
        <ul>
          <li>
            <img src="../assets/lijiacheng (3).jpg" alt="李嘉诚" />
            <h3>李嘉诚：精益求精的商业巨头</h3>
            <p>
              李嘉诚是香港首富，也是中国的企业家和慈善家。他创立了长江实业集团、香港电讯公司等多个知名企业，并以其卓越的经营能力和领导才华著称。
            </p>
            <p>
              李嘉诚先生一直推崇“工匠精神”，他认为，只有像工匠一样精益求精，将每一个细节处理得尽善尽美，才能打造出真正优秀的产品和服务。
            </p>
            <router-link to="lijiacheng">了解更多</router-link>
          </li>
          <li>
            <img src="../assets/mahuateng.jpg" alt="马化腾" />
            <h3>马化腾：工匠精神的实践者</h3>
            <p>
              马化腾（Pony
              Ma，本名马化腾），出生于湖南省汉寿县一个农村家庭。他是中国互联网巨头腾讯公司创始人之一，曾被《时代》周刊评选为全球最具影响力的人物之一。
            </p>
            <p>
              马化腾先生一直倡导“工匠精神”，他认为，只有对技术和用户体验精益求精，才能让产品更好地服务于用户。他曾说过：“我们推崇的是‘工匠精神’，坚持不断发掘、打磨每个细节。”
            </p>
            <router-link to="mahuateng">了解更多</router-link>
          </li>
          <li>
            <img src="../assets/aiaiguo (1).jpg" alt="艾爱国" />
            <h3>艾爱国：劳模制造 必是精品</h3>
            <p>
              艾爱国，我国焊接领域的领军人物，工匠精神的杰出代表。秉持“做事情要做到极致、做工人要做到最好”的信念，艾爱国在焊工岗位奉献50多年，集丰厚的理论素养、实际经验和操作技能于一身，多次参与我国重大项目焊接技术攻关，攻克数百个焊接技术难关。
            </p>
            <p>
              他注重技术传承，在湘钢板材焊接实验室主持下，带出了数百名徒弟，并无偿向200多名下岗工人和农村青年传授焊接技术。艾爱国以"当工人就要当好工人"为座右铭，在普通的岗位上勤奋学习、忘我工作，为党和人民作出了重要贡献。
            </p>
            <p>
              他充分体现了“工匠精神”的信念和行动，不断追求卓越的品质和服务，以细致入微的态度对待每一个环节，从而赢得了广泛的尊敬和认可。
            </p>
            <router-link to="aiaiguo">了解更多</router-link>
          </li>
          <li>
            <img src="../assets/jobs (2).jpg" alt="乔布斯" />
            <h3>史蒂夫·乔布斯：不断革新的策略</h3>
            <p>
              史蒂夫·乔布斯（Steve
              Jobs）是苹果公司的联合创始人之一，也是现代科技发展历程中最具影响力的人物之一。他曾带领苹果开创了电子产品的全新时代。
            </p>
            <p>
              乔布斯先生在设计和开发苹果产品的过程中，坚持追求“完美”，他自称是一个“完美主义者”。他认为，只有对每个细节都做到尽善尽美，才能实现真正的革新。
            </p>
            <p>
              苹果公司凭借着乔布斯先生的领导才华和一群拥有“工匠精神”的员工，在多个领域取得了巨大成功，包括iPhone、iPad等多款产品的推出。
            </p>
            <router-link to="jobs">了解更多</router-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
};
</script>

<style scoped>
/* Reset styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Global styles */
body {
  font-family: Arial, sans-serif;
  line-height: 1.5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
}

h1 {
  font-size: 36px;
}

nav ul {
  display: flex;
}

nav li {
  margin-right: 20px;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

nav a:hover {
  text-decoration: underline;
}

section {
  padding: 80px 0;
}

h2 {
  font-size: 32px;
  margin-bottom: 40px;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

li {
  width: calc(50% - 20px);
  margin-bottom: 40px;
}

img {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}

h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}
</style>