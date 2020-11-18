import Vue from 'vue'
import App from './App.vue'
import { Button, Input, Select } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Select.name, Select)

new Vue({
  render: h => h(App),
}).$mount('#app')
