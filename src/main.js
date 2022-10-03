import { createApp } from 'vue'
import App from './App.vue'
import BaseDialog from './components/UI/BaseDialog.vue'

const app = createApp(App);

app.component('BaseDialog', BaseDialog);

app.mount('#app');

