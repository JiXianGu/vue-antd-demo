import Vue from 'vue'
import App from './App.vue'
import { Button, Input, Select, Icon, Row, Col, Affix, Breadcrumb } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Input)
Vue.use(Select)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Affix)
Vue.use(Breadcrumb)

new Vue({
  render: h => h(App),
}).$mount('#app')
